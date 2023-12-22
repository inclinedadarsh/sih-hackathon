import { NextResponse, NextResponse1 } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";
import crypto from "crypto";

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_KEY,
});

export async function POST(req, res) {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        await req.json();

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    console.log("id==", body);

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        // return NextResponse.redirect(new URL('/paymentsuccess', req.url))
    } else {
        return NextResponse.json(
            {
                message: "fail",
            },
            {
                status: 400,
            }
        );
    }

    return NextResponse.json(
        {
            message: "success",
        },
        {
            status: 200,
        }
    );
}
