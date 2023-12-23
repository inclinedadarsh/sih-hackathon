import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { VR } from "@/constants";
import { ArrowUpRight } from "lucide-react";

const page = () => {
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
                        <TableHead>City</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                    </TableHeader>
                    <TableBody>
                        {VR.map((place, index) => (
                            <TableRow key={index} className='border-blue-500'>
                                <TableCell>{place.city}</TableCell>
                                <TableCell className='font-medium text-lg'>
                                    {place.name}
                                </TableCell>
                                <TableCell>
                                    <span className='text-sm border rounded-full bg-white py-1 px-2 flex gap-1 item-center w-fit'>
                                        {place.type}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button className='ml-auto flex gap-2 items-center bg-green-500 text-white hover:bg-green-800'>
                                        See in VR <ArrowUpRight size={14} />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default page;
