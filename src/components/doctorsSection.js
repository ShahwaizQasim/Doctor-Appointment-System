import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function DoctorSection() {
    return (
        <div className="container mx-auto flex justify-between px-6">
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
    )
}