import { HOTELS } from "@/constants";
import HotelCard from "@/components/HotelCard";

const page = () => {
    return (
        <div className='view-container'>
            <h1 className='text-4xl md:text-6xl my-10 font-semibold'>
                Hotels and Stay
            </h1>
            <p className='max-w-4xl text-3xl leading-relaxed mb-8'>
                Explore the best hotels and stay in the city to make your trip
                memorable and comfortable.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14'>
                {HOTELS.map((hotel, index) => (
                    <HotelCard key={index} {...hotel} />
                ))}
            </div>
        </div>
    );
};

export default page;
