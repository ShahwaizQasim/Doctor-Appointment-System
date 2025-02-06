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



export default function DoctorSection() {
    return (
        <div className="min-h-screen container mx-auto ">
            <div className="flex justify-between px-6">
                <h1 className="text-3xl heading font-semibold">Premium Doctors</h1>
                <Select>
                    <SelectTrigger className="w-[180px] para">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                categories.map((categoriesData) => {
                                    console.log(categoriesData);
                                    return <SelectItem key={categoriesData} className="para bg-white text-black pointer hover:bg-black hover:text-white"
                                        value={categoriesData}>{categoriesData}</SelectItem>
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">

                {
                    doctors.map((allDoctors) => {
                        return <Card>
                            <CardHeader className="para">
                                <CardTitle>{allDoctors.name}</CardTitle>
                                <CardDescription>{allDoctors.category}</CardDescription>
                            </CardHeader>
                            <CardContent className="para">
                                <p>{allDoctors.hospital}</p>
                                <p>Doctor Appointment Time: <span className="font-semibold">{allDoctors.appointmentTime}</span></p>
                                <p>Doctor Fees: <span className="font-semibold">{allDoctors.fees}</span></p>
                            </CardContent>
                        </Card>
                    })
                }
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

            </div>
        </div>

    )
}