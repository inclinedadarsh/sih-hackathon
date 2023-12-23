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
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { MARKET_ITEMS } from "@/constants";
import { Plus, ArrowRight, Pizza, Shapes, Pill } from "lucide-react";
import { marketItem, marketItems } from "@/types";

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
            <h1 className='text-4xl md:text-6xl my-10 font-semibold'>
                Market - Food & Souvenirs
            </h1>
            <p className='max-w-4xl text-3xl leading-relaxed mb-8'>
                Explore local markets and shops within Goda Park, offering a
                variety of food and souvenirs to enrich your experience.
            </p>
            <div className=''>
                <Table className='table'>
                    <TableHeader>
                        <TableHead>ID</TableHead>
                        <TableHead>Item name</TableHead>
                        <TableHead>Item type</TableHead>
                        <TableHead>Item price</TableHead>
                    </TableHeader>
                    <TableBody>
                        {MARKET_ITEMS.map((item, index) => (
                            <TableRow key={index} className='border-blue-500'>
                                <TableCell>{item.id}</TableCell>
                                <TableCell className='font-medium text-lg'>
                                    {item.title}
                                </TableCell>
                                <TableCell>
                                    <span className='text-sm border rounded-full bg-white py-1 px-2 flex gap-1 items-center w-fit'>
                                        {item.tag == "Food" ? (
                                            <>
                                                <Pizza size={16} /> Food
                                            </>
                                        ) : item.tag == "Souvenir" ? (
                                            <>
                                                <Shapes size={16} /> Souvenir
                                            </>
                                        ) : (
                                            <>
                                                <Pill size={16} /> Medicine
                                            </>
                                        )}
                                    </span>
                                </TableCell>
                                <TableCell className='font-medium'>
                                    ₹&nbsp;&nbsp;&nbsp;{item.price}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        className='ml-auto flex gap-2 items-center bg-green-500 text-white hover:bg-green-800'
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
                <Table className='cart'>
                    <TableHeader>
                        <TableHead>Item name</TableHead>
                        <TableHead>Item price</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Total price</TableHead>
                    </TableHeader>
                    <TableBody className='table-body'>
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
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className='ml-auto flex gap-2 items-center bg-white text-black hover:bg-blue-100'>
                                            Proceed to checkout{" "}
                                            <ArrowRight size={18} />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Thank you!
                                            </DialogTitle>
                                            <DialogDescription>
                                                Your order has been placed
                                                successfully. Here are the
                                                details:
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className='flex gap-5'>
                                            <span className=''>
                                                Order ID: {generateRandomId()}
                                            </span>
                                            <span className=''>
                                                Amount:{" "}
                                                {cart.reduce((total, item) => {
                                                    return (
                                                        total +
                                                        item.price *
                                                            item.quantity
                                                    );
                                                }, 0)}
                                            </span>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default page;
