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
import Image from "next/image";

export default function Home() {
    return (
        <div className='view-container min-h-screen flex justify-center items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 my-14 h-fit'>
                {HOME_CARDS.map((card) => (
                    <Card key={card.title} className='max-w-[360px]'>
                        <CardHeader>
                            <CardTitle className='flex gap-2 items-center mx-auto text-lg'>
                                {<card.icon />} {card.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link href={card.url}>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    className='w-full aspect-square object-cover'
                                />
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
