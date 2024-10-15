"use client"

import React from 'react'
import { Home, LayoutGrid, Gamepad2, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavItem {
    icon: React.ReactElement
    path: string
}

interface DeviceMockupProps {
    children: React.ReactNode
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({ children }) => {
    const pathname = usePathname()

    const navItems: NavItem[] = [
        { icon: <Home />, path: '/' },
        { icon: <LayoutGrid />, path: '/dashboard' },
        { icon: <Gamepad2 />, path: '/games' },
        { icon: <User />, path: '/profile' },
    ]

    return (
        <div className="relative w-72 h-[600px] bg-[#262c2e] rounded-[40px] shadow-xl overflow-hidden">
            {/* Device frame */}
            <div className="absolute inset-0 border-[14px] border-gray-800 rounded-[40px] pointer-events-none"></div>

            {/* Top notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl"></div>

            {/* Content area */}
            <div className="h-full pt-8 pb-20 px-4 z-50 overflow-y-auto">

                {children}

            </div>

            {/* Bottom navigation */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-[#2b3033] rounded-t-xl flex justify-around items-center px-6">
                {navItems.map((item, index) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={index}
                            className={`p-2 rounded-full transition-all duration-300 ${isActive
                                ? 'bg-white bg-opacity-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                                : 'hover:bg-white hover:bg-opacity-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                                }`}
                            href={item.path}
                        >
                            {React.cloneElement(item.icon, {
                                className: `w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`,
                            })}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default DeviceMockup