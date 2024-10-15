"use client";

import { useEffect } from "react";
import { SidebarStore } from "@/stores/sidebar";

interface LayoutProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

export default function AdminLayoutConfig({ sidebar, children }: LayoutProps) {
    const { isOpen, closeSidebar } = SidebarStore();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                closeSidebar();
            }
        };

        // Initial check in case the user starts on a smaller screen
        handleResize();

        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [closeSidebar]);

    return (
        <div className="flex">
            {/* Sidebar Section */}
            <div
                className={`${isOpen ? "w-64" : "w-20"
                    } hidden md:flex fixed top-0 bottom-0 left-0 bg-white transition-all transition-width duration-300 border-r`}
            >
                {sidebar}
            </div>

            {/* Main Content Section */}
            <main
                className={`flex-1 transition-margin duration-300 ${isOpen ? "md:ml-64" : "md:ml-20"
                    } ml-0 p-4 md:p-0`}
            >
                {children}
            </main>
        </div>
    );
}
