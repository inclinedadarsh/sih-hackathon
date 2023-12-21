import Link from "next/link";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { buttonVariants } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

import { HOME_CARDS } from "@/constants";

export default function Home() {
    return (
        <div className='view-container'>
            <h1 className='text-3xl lg:text-4xl my-8 font-semibold'>
                Welcome to Goda Park 👋
            </h1>
            <p className='max-w-2xl'>
                Welcome to Goda Park—a haven for tourists! Our project aims to
                enhance your visit with valuable resources and assistance,
                ensuring a memorable experience amidst the beauty of this
                enchanting destination.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-14'>
                {HOME_CARDS.map((card) => (
                    <Card key={card.title}>
                        <CardHeader>
                            <CardTitle className='flex gap-2 items-center text-lg'>
                                {<card.icon />} {card.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href={`${card.url}`}
                                className={buttonVariants()}
                            >
                                Check out <ArrowRight />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
