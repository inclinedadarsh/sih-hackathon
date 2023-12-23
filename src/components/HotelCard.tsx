import Image from "next/image";

import { hotel } from "@/types";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Star, StarHalf } from "lucide-react";
import { Button } from "./ui/button";

const HotelCard = ({ name, image, rating }: hotel) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
        <Card className='max-w-[340px] md:max-w-lg'>
            <CardContent>
                <Image src={image} alt={name} className='mt-6 rounded-md' />
                <h2 className='text-xl font-semibold mt-5'>{name}</h2>
                <div className='flex gap-2'>
                    {[...Array(fullStars)].map((_, index) => (
                        <Star key={index} fill='#ffbf00' stroke='#ffbf00' />
                    ))}
                    {halfStar && <StarHalf fill='#ffbf00' stroke='#ffbf00' />}
                </div>
            </CardContent>
            <CardFooter>
                <Button className='bg-blue-600 text-white hover:bg-blue-800 w-full'>
                    Book Now!
                </Button>
            </CardFooter>
        </Card>
    );
};

export default HotelCard;
