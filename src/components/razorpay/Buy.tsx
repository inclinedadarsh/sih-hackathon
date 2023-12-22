"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Buy = ({ makePayment }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button
            className='ml-auto flex gap-2 items-center'
            disabled={isLoading}
            onClick={() => {
                makePayment({ productId: "example_ebook" });
            }}
        >
            {isLoading ? (
                "Loading..."
            ) : (
                <>
                    Proceed to checkout <ArrowRight size={18} />
                </>
            )}
        </Button>
    );
};

export default Buy;
