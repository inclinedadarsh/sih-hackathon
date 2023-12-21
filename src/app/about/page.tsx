import Image from "next/image";

import godaImage1 from "@/assets/goda1.jpeg";
import godaImage2 from "@/assets/goda2.jpeg";
import godaImage3 from "@/assets/goda3.jpeg";

const page = () => {
    return (
        <div className='view-container'>
            <h1 className='text-3xl lg:text-4xl my-8 font-semibold'>
                Guide & Discovery Companion
            </h1>
            <p className='max-w-2xl'>
                Engage with knowledgeable guides to uncover the hidden gems and
                stories of Goda Park, enhancing your understanding of its rich
                history and culture.
            </p>
            <div className='border-t w-full mt-10'></div>
            <div className='my-16 space-y-24'>
                <div className='flex gap-7 flex-col lg:flex-row '>
                    <Image src={godaImage1} alt='Image' className='flex-1' />

                    <p className='flex-1'>
                        Goda Park, a popular tourist destination in Nashik,
                        offers a delightful blend of recreational and cultural
                        experiences. Nestled along the picturesque banks of the
                        Godavari River, this park welcomes visitors with its
                        open-air ambiance and a range of attractions. The park
                        features open-air restaurants where visitors can indulge
                        in the culinary delights of the region while enjoying
                        the serene surroundings.
                    </p>
                </div>
                <div className='flex gap-7 flex-col lg:flex-row-reverse'>
                    <Image src={godaImage2} alt='Image' className='flex-1' />

                    <p className='flex-1'>
                        One of the highlights of Goda Park is its outdoor
                        theaters, providing a unique platform for cultural
                        performances and plays. Visitors have the opportunity to
                        immerse themselves in the vibrant arts scene, showcasing
                        Nashik's rich cultural heritage. As Nashik is renowned
                        for its world-famous grapes and wine, Goda Park proudly
                        showcases this local specialty.
                    </p>
                </div>
                <div className='flex gap-7 flex-col lg:flex-row'>
                    <Image src={godaImage3} alt='Image' className='flex-1' />

                    <p className='flex-1'>
                        Tourists can savor the distinct flavors of Nashik's
                        grapes and wines, offering a taste of the region's
                        celebrated viticulture. With its scenic location,
                        cultural offerings, and a taste of Nashik's culinary
                        excellence, Goda Park stands as a multifaceted
                        destination, inviting tourists to experience the charm
                        and vibrancy of this captivating city along the Godavari
                        River.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
