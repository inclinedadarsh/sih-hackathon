"use client";
import { Suspense } from "react";

import Buy from "./Buy";
import { useRouter } from "next/navigation";
import Loading from "@/app/Loading";

const BuyProduct = () => {
    const router = useRouter();

    const makePayment = async ({ productId = null }) => {
        const key = process.env.RAZORPAY_KEY;
        const data = await fetch("/api/razorpay");
        const { order } = await data.json();

        const options = {
            key,
            name: "Test",
            currency: order.currency,
            amount: order.amount,
            order_id: order.id,
            description: "Test Transaction",
            handler: async function (response: any) {
                const data = await fetch("/api/paymentverify", {
                    method: "POST",
                    body: JSON.stringify({
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    }),
                });

                const res = await data.json();
                if (res?.message == "success") {
                    router.push(
                        "/paymentsuccess?paymentid=" +
                            response.razorpay_payment_id
                    );
                }
            },
            prefill: {
                name: "TestName",
                email: "testemail@test.com",
                contact: "9876543210",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response: any) {
            alert("Payment Failed. Please try again.");
        });
    };

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Buy makePayment={makePayment} />
            </Suspense>
        </>
    );
};

export default BuyProduct;
