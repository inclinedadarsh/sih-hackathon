import Image from "next/image";
import { guide } from "@/types";
import { PhoneCall, Star, StarHalf } from "lucide-react";

const GuideCard = ({
    experience,
    id,
    image,
    language,
    name,
    numOfTours,
    phone,
    rating,
    speciality,
}: guide) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className='flex gap-5 text-black/75 items-center max-w-3xl'>
            <div className='grow flex px-12 py-8 bg-blue-50/60 rounded-xl border-2 border-blue-300'>
                <div className='w-48 space-y-8'>
                    <Image src={image} alt={id} className='rounded-full w-28' />
                    <div className='flex gap-2'>
                        {[...Array(fullStars)].map((_, index) => (
                            <Star key={index} fill='#ffbf00' color='#ffbf00' />
                        ))}
                        {halfStar && (
                            <StarHalf fill='#ffbf00' color='#ffbf00' />
                        )}
                    </div>
                </div>
                <div className=''>
                    <h2>
                        Name:{" "}
                        <span className='text-black text-xl font-medium'>
                            {name}
                        </span>
                    </h2>
                    <p>
                        Guide ID:{" "}
                        <span className='text-black text-xl font-medium'>
                            {id}
                        </span>
                    </p>
                    <div className='flex gap-5 mt-5'>
                        <p className='w-44'>Number of Tours: {numOfTours}</p>
                        <p className='w-44'>Experience: {experience} Years</p>
                    </div>
                    <div className='flex gap-5 mb-5'>
                        <p className='w-44'>Language: {language}</p>
                        <p className='w-44'>Speciality: {speciality}</p>
                    </div>
                    <p className=''>Contact: {phone}</p>
                </div>
            </div>
            <div className='w-42 flex justify-center items-center'>
                <span className='ml-auto p-10 rounded-full text-white bg-green-500'>
                    <PhoneCall size={42} />
                </span>
            </div>
        </div>
    );
};

export default GuideCard;
