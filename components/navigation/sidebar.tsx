"use client"

import { motion } from "framer-motion"
import { Gamepad2, Home, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BsFillGridFill } from "react-icons/bs"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const links = [
        { href: "/", icon: Home },
        { href: "/dashboard", icon: BsFillGridFill },
        { href: "/games", icon: Gamepad2 },
        { href: "/profile", icon: User },
    ]

    return (
        <>
            <aside
                className={`${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed left-0 top-0 h-full w-16 flex-col justify-center items-center py-8 hidden md:flex space-y-9 bg-[#393e41] transition-transform duration-300 ease-in-out z-40 border border-l-0 border-slate-500 rounded-r-3xl`}
            >
                {links.map((link) => (
                    <motion.div key={link.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href={link.href} passHref>
                            <div
                                className={`p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${pathname === link.href
                                    ? "bg-white bg-opacity-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    : "hover:bg-white hover:bg-opacity-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                    }`}
                            >
                                <link.icon className={`${pathname === link.href ? "text-white" : "text-gray-400"}`} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </aside>

            {/* Tab Bar for smaller devices */}
            <nav
                className="fixed bottom-0 left-0 right-0 z-40 flex justify-around items-center bg-[#393e41] py-4 md:hidden border-t rounded-t-3xl border-slate-500">
                {links.map((link) => (
                    <motion.div key={link.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Link href={link.href} passHref>
                            <div
                                className={`p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${pathname === link.href
                                    ? "bg-white bg-opacity-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    : "hover:bg-white hover:bg-opacity-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                    }`}
                            >
                                <link.icon className={`${pathname === link.href ? "text-white" : "text-gray-400"}`} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </nav>
        </>
    )
}
