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
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem className="para" value="apple">Apple</SelectItem>
                            <SelectItem className="para" value="banana">Banana</SelectItem>
                            <SelectItem className="para" value="blueberry">Blueberry</SelectItem>
                            <SelectItem className="para" value="grapes">Grapes</SelectItem>
                            <SelectItem className="para" value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
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