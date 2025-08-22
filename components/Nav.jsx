"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"   
import { use } from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "Resume",
        path: "/resume",
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

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`capitalize font-medium transition-all
                                ${link.path === pathname ? "text-purple-500 border-b-2 border-accent" : "hover:text-purple-500"}
                            `}
                        >
                            {link.name}
                        </Link>
                );
            })}
        </nav>
    );
};

export default Nav