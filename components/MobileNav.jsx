"use client";

import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle } from "@/components/ui/sheet";
import Button from "@/components/ui/button";
import {usePathname} from 'next/navigation';
import Link from "next/link"; 
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",     
        path: "/contact",
    },
];
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="fixed top-4 right-4 z-50 flex justify-center items-center bg-transparent border-none outline-none">
                <CiMenuFries className="text-[32px] text-purple-500" />
            </SheetTrigger>
                                    <SheetContent side="right" className="bg-neutral-900 text-white w-64 h-full p-0">
                                        <div className="flex flex-col h-full bg-neutral-900 p-6">
                                            <Link href="/">
                                                <h1 className="text-4xl font-semibold mb-8">
                                                    Mahathi<span className="text-purple-500">.</span>
                                                </h1>
                                            </Link>
                                            <nav className="flex flex-col items-center gap-6 flex-1 justify-center">
                                                {links.map((link,index) => (
                                                    <Link href={link.path} key={index} className={`text-xl capitalize hover:text-accent transition-all duration-200 ${link.path == pathname ? "text-purple-500" : ""}`}>
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                            <div className="flex justify-center mt-8">
                                                <Link href="/contact">
                                                    <Button>Hire me</Button>
                                                </Link>
                                            </div>
                                            <SheetClose />
                                        </div>
                                </SheetContent>
                            </Sheet>
                        );
                    };


export default MobileNav;