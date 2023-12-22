"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { MARKET_ITEMS } from "@/constants";
import { Plus, ArrowRight } from "lucide-react";
import { marketItem, marketItems } from "@/types";
import BuyProduct from "@/components/razorpay/BuyProduct";

const page = () => {
    const [cart, setCart] = useState<marketItems>([]);
    const [mounted, setMounted] = useState(false);

    const addToCart = (item: marketItem) => {
        const existingItemIndex = cart.findIndex(
            (cartItem) => cartItem.id === item.id
        );

        if (existingItemIndex !== -1) {
            // If the item is already in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    function generateRandomId(): string {
        const randomAlphabet1 = Math.random()
            .toString(36)
            .substring(2, 3)
            .toUpperCase();
        const randomAlphabet2 = Math.random()
            .toString(36)
            .substring(2, 3)
            .toUpperCase();
        const randomAlphabet3 = Math.random()
            .toString(36)
            .substring(2, 3)
            .toUpperCase();
        const randomNumber = Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0");

        return `2023${randomAlphabet1}${randomAlphabet2}${randomAlphabet3}${randomNumber}`;
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return (
        <div className='view-container'>
            <h1 className='text-3xl lg:text-4xl my-8 font-semibold'>
                Market - Food & Souvenirs
            </h1>
            <p className='max-w-2xl'>
                Explore local markets and shops within Goda Park, offering a
                variety of food and souvenirs to enrich your experience.
            </p>
            <div className=''>
                <h2 className='text-2xl font-medium my-14 mb-7'>
                    Select items from cart
                </h2>
                <Table>
                    <TableHeader>
                        <TableHead>ID</TableHead>
                        <TableHead>Item name</TableHead>
                        <TableHead>Item type</TableHead>
                        <TableHead>Item price</TableHead>
                    </TableHeader>
                    <TableBody>
                        {MARKET_ITEMS.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell className='font-medium text-lg'>
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    <span className='text-sm border rounded-sm py-1 px-2'>
                                        {item.tag}
                                    </span>
                                </TableCell>
                                <TableCell className='font-medium'>
                                    ₹&nbsp;&nbsp;&nbsp;{item.price}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        className='ml-auto flex gap-2 items-center'
                                        variant='outline'
                                        size='sm'
                                        onClick={() => {
                                            addToCart(item);
                                        }}
                                    >
                                        Add to cart <Plus size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className=''>
                <h2 className='text-2xl font-medium my-14 mb-7'>Your cart</h2>
                <Table>
                    <TableHeader>
                        <TableHead>Item name</TableHead>
                        <TableHead>Item price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total price</TableHead>
                    </TableHeader>
                    <TableBody>
                        {cart.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className='text-lg font-medium'>
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    ₹&nbsp;&nbsp;&nbsp;{item.price}
                                </TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>
                                    ₹&nbsp;&nbsp;&nbsp;
                                    {item.price * item.quantity}
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow className='border-t'>
                            <TableCell>Total price</TableCell>
                            <TableCell className='text-lg font-medium'>
                                ₹&nbsp;&nbsp;&nbsp;
                                {cart.reduce((total, item) => {
                                    return total + item.price * item.quantity;
                                }, 0)}
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <BuyProduct />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default page;
