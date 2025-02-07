import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { categories, doctors } from "@/lib/data"
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PersonIcon, PlusIcon, ClockIcon, HomeIcon } from "@radix-ui/react-icons";


export default function DoctorSection({ isHome }) {

    const filtered = isHome ? doctors.slice(0, 6) : doctors;

    return (
        <div className="min-h-screen container mx-auto my-10 ">
            <div className="flex justify-between px-6">
                <h1 className="text-3xl heading font-semibold">Doctor You Need</h1>
                {
                    isHome ?
                        <Link href={'/doctors'}>
                            <Button className="bg-black text-white rounded para lg:w-[120px] hover:text-black hover:border-2">See More</Button>
                        </Link> :
                        <Select>
                            <SelectTrigger className="w-[180px] para">
                                <SelectValue placeholder="Select categories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        categories.map((categoriesData) => {
                                            return <SelectItem key={categoriesData} className="para bg-white text-black pointer hover:bg-black hover:text-white"
                                                value={categoriesData}>{categoriesData}</SelectItem>
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">

                {
                    filtered.map((allDoctors) => {
                        return <Card key={allDoctors.id}>
                            <CardHeader className="para">
                                <CardTitle>
                                    <div className="flex gap-4">
                                        <div>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div>
                                            <p className="pt-1 font-normal">{allDoctors.name}</p>
                                            <p className="pt-2 font-normal">{allDoctors.category}</p>
                                        </div>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between para">
                                    <div className="flex gap-2">
                                        <PersonIcon className="mt-1" />
                                        <p className="font-medium">Gender</p>
                                    </div>
                                    <p>{allDoctors.gender}</p>
                                </div>
                                <div className="flex justify-between para">
                                    <div className="flex gap-2">
                                        <PlusIcon className="mt-1" />
                                        <p className="font-medium">Hospital</p>
                                    </div>
                                    <p>{allDoctors.hospital}</p>
                                </div>
                                <div className="flex justify-between para">
                                    <div className="flex gap-2">
                                        <ClockIcon className="mt-1" />
                                        <p className="font-medium">Appointment Time</p>
                                    </div>
                                    <p>{allDoctors.appointmentTime}</p>
                                </div>
                                <div className="flex justify-between para">
                                    <div className="flex gap-2">
                                        <HomeIcon className="mt-1" />
                                        <p className="font-medium">Fees</p>
                                    </div>
                                    <p>${allDoctors.fees}</p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/doctors/${allDoctors.id}`}>
                                    <Button variant="outline" className={"bg-black text-white rounded para text-[12px] font-normal"}>
                                        See Detail
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    })
                }
            </div>
        </div>
    )
}