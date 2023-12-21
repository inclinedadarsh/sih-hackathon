import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { GUIDE } from "@/constants";
import { ArrowUpRight } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

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
            <Table className='mt-14'>
                <TableHeader>
                    <TableHead>Guide ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Speciality</TableHead>
                    <TableHead>Phone Number</TableHead>
                </TableHeader>
                <TableBody>
                    {GUIDE.map((guide, index) => (
                        <TableRow key={index}>
                            <TableCell>{guide.id}</TableCell>
                            <TableCell>{guide.name}</TableCell>
                            <TableCell>{guide.speciality}</TableCell>
                            <TableCell>{guide.phone}</TableCell>
                            <TableCell>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button
                                            variant='outline'
                                            size='sm'
                                            className='flex items-center gap-1'
                                        >
                                            Get details{" "}
                                            <ArrowUpRight size={18} />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Guide Details
                                            </DialogTitle>
                                        </DialogHeader>
                                        <div className='flex flex-col gap-1'>
                                            <span className=''>
                                                Name: {guide.name}
                                            </span>
                                            <span className=''>
                                                Speciality: {guide.speciality}
                                            </span>
                                            <span className=''>
                                                Phone: {guide.phone}
                                            </span>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default page;
