import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_KEY,
});

export async function GET() {
    const payment_capture = 1;
    const amount = 1 * 100;
    const currency = "INR";
    const options = {
        amount: amount.toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
        notes: {
            paymentFor: "Test account",
            userId: "8080",
            productId: "p100",
        },
    };

    const order = await instance.orders.create(options);
    return NextResponse.json({ msg: "success", order });
}

export async function POST(req) {
    const body = await req.json();

    return NextResponse.json({ msg: body });
}
