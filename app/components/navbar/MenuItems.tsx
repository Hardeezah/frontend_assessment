'use client';

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const MenuItems = () => {
    const pathname = usePathname();
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);

    useEffect(() => {
        // Set the active item based on the current route
        if (pathname === '/about') {
            setActiveItem('About');
        } else if (pathname === '/services') {
            setActiveItem('Services');
        } else if (pathname === '/careers') {
            setActiveItem('Careers');
        } else if (pathname === '/contact') {
            setActiveItem('Contact');
        }
    }, [pathname]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="flex gap-[46px]">
            <div className="gap-[76px] hidden md:block">
                <ul className="flex flex-row w-[455px] h-[23px] gap-[53px] justify-center text-center items-center mt-1">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className={`text-[18px] cursor-pointer hover:text-[#FFD803] ${activeItem === item.name ? 'text-[#FFD803]' : 'text-[#FEF6E4]'}`}
                            onClick={() => setActiveItem(item.name)}
                        >
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="outline" className="bg-[#FEF6E4] hover:bg-[#E2D8C0]">Get Started</Button>
            <Image
                alt="logo"
                className="cursor-pointer block md:hidden"
                height="30"
                width="30"
                src="/images/menu.png"
                onClick={openModal}
            />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default MenuItems;
