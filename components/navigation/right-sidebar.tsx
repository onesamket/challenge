"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, CreditCard, Gamepad2, LogOut, QrCode, Settings, User } from 'lucide-react'
import { useState, useEffect, useRef } from "react"
import { FaGooglePay, FaPaypal, FaBars } from 'react-icons/fa'

export default function RightSidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const [openMenuItem, setOpenMenuItem] = useState<string | null>(null)
    const sidebarRef = useRef<HTMLDivElement>(null)

    const menuItems = [
        { icon: User, label: 'Personal Info' },
        { icon: Gamepad2, label: 'Game Progress' },
        { icon: CreditCard, label: 'Billing Methods' },
        { icon: Settings, label: 'Settings' },
        { icon: LogOut, label: 'Logout' },
    ]

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-full text-white transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? null : <FaBars size={20} />}
            </button>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`${isOpen ? 'translate-x-0' : 'translate-x-full'}
                md:translate-x-0 fixed right-0 top-0 h-full bg-[#262b2e] p-6 w-72 transition-transform duration-300 ease-in-out z-40 overflow-y-auto border-l border-gray-800`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        className="md:hidden p-2 rounded-full text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <ChevronRight size={20} /> : <FaBars size={20} />}
                    </button>
                    <h3 className="text-xl font-semibold">My Profile</h3>
                    <Button variant="ghost" size="icon">
                        <QrCode className="h-5 w-5" />
                    </Button>
                </div>

                {/* Avatar and Profile Information */}
                <div className="flex flex-col items-center mb-6">
                    <Avatar className="w-24 h-24 mb-4 border-r-2 border-t-2 border-cyan-400">
                        <AvatarImage src="https://github.com/onesamket.png" alt="Skull Crusher" />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <h4 className="text-lg font-semibold">
                        Onesamket Br
                        <ChevronDown className="inline h-4 w-4 cursor-pointer" />
                    </h4>
                    <p className="text-sm text-gray-400">Pro Gamer</p>
                </div>

                {/* Rating and Rarity */}
                <div className="flex justify-between mb-6 text-sm">
                    <div>
                        <p className="text-gray-400">Rating:</p>
                        <p className="text-cyan-400 font-semibold">8.2/10</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Rarity:</p>
                        <p className="text-cyan-400 font-semibold">Shadow Series</p>
                    </div>
                </div>

                {/* Accordion Menu Items */}
                <div className="space-y-1 mb-6">
                    {menuItems.map(({ icon: Icon, label }) => {
                        const isActive = openMenuItem === label
                        return (
                            <Button
                                key={label}
                                variant="ghost"
                                className={`w-full justify-between text-gray-300 hover:text-white transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}
                                onClick={() => setOpenMenuItem(isActive ? null : label)}
                            >
                                <div className="flex items-center">
                                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl mr-3 transition-all duration-300 bg-opacity-10 ${isActive
                                        ? 'bg-cyan-600/10 shadow-[0_0_10px_rgba(6,182,212,0.7)]'
                                        : 'hover:bg-cyan-600/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                                        }`}
                                    >
                                        <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                    </div>
                                    {label}
                                </div>
                                <ChevronDown className={`h-4 w-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                            </Button>
                        )
                    })}
                </div>

                {/* Payment Methods */}
                <div className="mt-6">
                    <h4 className="mb-4 text-sm font-semibold">Select Your Payment Method</h4>
                    <div className="flex justify-between">
                        <PaymentMethodButton icon={FaGooglePay} />
                        <PaymentMethodButton icon={FaPaypal} />
                        <PaymentMethodButton icon={CreditCard} />
                    </div>
                </div>
            </div>
        </>
    )
}

function PaymentMethodButton({ icon: Icon }: { icon: React.ComponentType }) {
    return (
        <button className="flex items-center justify-center w-20 h-12 mx-2 rounded-xl hover:bg-cyan-600/10 border-cyan-700 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300">
            {/* @ts-ignore  */}
            <Icon className="h-5 w-5" />
        </button>
    )
}
