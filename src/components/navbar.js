import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-slate-300">
            <div className="flex justify-between py-4 px-5 container mx-auto">
                <h1 className="font-mono text-3xl">LOGO</h1>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className={"border-none bg-slate-300 cursor-pointer"}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                            <Link href={'/profile'}>
                                <MenubarItem className="cursor-pointer"> Profile </MenubarItem>
                            </Link>
                            <hr />
                            <Link href={'/appointments'}>
                                <MenubarItem className="cursor-pointe">My Appointment</MenubarItem>
                            </Link>
                            <hr />
                            <MenubarItem className="cursor-pointer">Logout</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>


            </div>
        </div>
    )
}