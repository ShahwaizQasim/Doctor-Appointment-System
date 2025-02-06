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
                                <CardTitle>{allDoctors.name}</CardTitle>
                                <CardDescription>{allDoctors.category}</CardDescription>
                            </CardHeader>
                            <CardContent className="para">
                                <p>{allDoctors.hospital}</p>
                                <p>Doctor Appointment Time: <span className="font-semibold">{allDoctors.appointmentTime}</span></p>
                                <p>Doctor Fees: <span className="font-semibold">${allDoctors.fees}</span></p>
                            </CardContent>
                        </Card>
                    })
                }
            </div>
        </div>
    )
}