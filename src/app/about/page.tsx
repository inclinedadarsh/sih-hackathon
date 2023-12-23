import Image from "next/image";

import {
    godaImage1,
    godaImage2,
    godaImage3,
    tape1,
    tape2,
    tape3,
} from "@/assets";
import { Star } from "lucide-react";

const page = () => {
    return (
        <div className='view-container'>
            <h1 className='text-4xl md:text-6xl my-20 font-semibold'>
                Guide & Discovery Companion
            </h1>
            <p className='max-w-4xl text-3xl leading-relaxed'>
                Engage with knowledgeable guides to uncover the hidden gems and
                stories of Goda Park, enhancing your understanding of its rich
                history and culture.
            </p>
            <div className='border-t w-full mt-10'></div>
            <div className='my-16 space-y-32'>
                <div className='flex gap-14  flex-col lg:flex-row-reverse '>
                    <div className='flex-1 h-fit relative'>
                        <Image
                            src={tape3}
                            alt='Tape 3'
                            className='absolute w-24 rotate-45 -top-20 z-10 left-0'
                        />
                        <Image
                            src={tape3}
                            alt='Tape 3'
                            className='absolute w-24 rotate-45 -bottom-20 right-0 z-10'
                        />
                        <Image
                            src={godaImage1}
                            alt='Image'
                            className='rotate-6 z-0 relative w-full'
                        />
                    </div>
                    <p className='flex-1 text-xl text-black/80 first-letter:text-6xl first-letter:font-semibold first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-black'>
                        Goda Park, nestled in the captivating city of Nashik,
                        stands out as a must-visit destination, offering a
                        harmonious blend of recreational and cultural
                        experiences. Along the picturesque banks of the Godavari
                        River, the park's open-air ambiance and diverse
                        attractions create an inviting atmosphere for tourists
                        seeking a memorable getaway. From open-air restaurants
                        that allow visitors to relish the culinary wonders of
                        the region to the tranquil surroundings, Goda Park
                        captivates with its range of offerings.
                        <span className='flex gap-3 mt-4 px-6 py-3 bg-muted w-fit rounded-lg'>
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                        </span>
                    </p>
                </div>
                <div className='flex gap-14 relative flex-col lg:flex-row'>
                    <div className='flex-1 h-fit relative'>
                        <Image
                            src={tape2}
                            alt='Tape 2'
                            className='absolute w-64 -top-20 z-10 left-20'
                        />
                        <Image
                            src={tape3}
                            alt='Tape 3'
                            className='absolute w-24 -rotate-[30deg] bottom-36 -right-10 z-10'
                        />
                        <Image
                            src={tape3}
                            alt='Tape 3'
                            className='absolute w-24 rotate-[330deg] bottom-32 -left-12 -scale-100 z-10'
                        />
                        <Image
                            src={godaImage2}
                            alt='Image'
                            className='-rotate-[4deg] z-0 relative w-full'
                        />
                    </div>
                    <p className='flex-1 text-xl text-black/80 first-letter:text-6xl first-letter:font-semibold first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-black'>
                        Visitors can immerse themselves in the distinct flavors
                        of Nashik's culinary treasures, elevating their stay
                        with a fusion of nature and delectable cuisine. Goda
                        Park's outdoor theaters add another layer to the
                        cultural tapestry, serving as a distinctive platform for
                        a variety of artistic performances and plays. One of the
                        park's standout features is its outdoor theaters,
                        offering a unique platform for cultural performances and
                        plays. Visitors have the rare opportunity to engage with
                        Nashik's rich cultural heritage.
                        <span className='flex gap-3 mt-4 px-6 py-3 bg-muted w-fit rounded-lg'>
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='grey' stroke='grey' />
                        </span>
                    </p>
                </div>
                <div className='flex gap-14 relative flex-col lg:flex-row-reverse'>
                    <div className='flex-1 h-fit relative'>
                        <Image
                            src={tape1}
                            alt='Tape 1'
                            className='absolute w-32 -top-6 z-10 -right-14'
                        />
                        <Image
                            src={tape1}
                            alt='Tape 3'
                            className='absolute w-32 rotate-[30deg] -bottom-20 -right-14 z-10'
                        />
                        <Image
                            src={tape1}
                            alt='Tape 3'
                            className='absolute w-32 rotate-90 -bottom-12 -left-16 z-10'
                        />
                        <Image
                            src={godaImage3}
                            alt='Image'
                            className='rotate-[4deg] z-0 relative w-full'
                        />
                    </div>
                    <p className='flex-1 text-xl text-black/80 first-letter:text-6xl first-letter:font-semibold first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-black'>
                        Goda Park proudly showcases Nashik's world-renowned
                        grapes and wine, inviting tourists to savor the distinct
                        flavors of the region's celebrated viticulture. The park
                        becomes a hub for experiencing the essence of Nashik's
                        culinary excellence, providing a genuine taste of the
                        local grape varieties and wines. With its idyllic scenic
                        location, cultural offerings, and a delectable journey
                        into Nashik's culinary world, Goda Park emerges as a
                        multifaceted destination, encouraging tourists to
                        explore the charm and vibrancy of this captivating city
                        along the meandering course of the Godavari River.
                        <span className='flex gap-3 mt-4 px-6 py-3 bg-muted w-fit rounded-lg'>
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                            <Star size={30} fill='gold' stroke='gold' />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
