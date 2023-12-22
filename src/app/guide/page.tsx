import { GUIDE } from "@/constants";

import GuideCard from "@/components/GuideCard";

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
            <div className='flex flex-col gap-10 items-center my-24'>
                {GUIDE.map((guide, index) => (
                    <GuideCard key={index} {...guide} />
                ))}
            </div>
        </div>
    );
};

export default page;
