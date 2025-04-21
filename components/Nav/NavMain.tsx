"use client";
import React, { useEffect, useState } from "react";
import { House, User, Folder } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../Theme/ModeToggle";

interface NavItemProps {
    icon: React.ReactNode;
    href: string;
    active?: boolean;
    onClick: (href: string) => void;
}

function NavItem({ icon, href, active = false, onClick }: NavItemProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(href);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`flex items-center justify-center w-9 md:w-12 aspect-square text-accent-foreground relative before:rounded-full before:duration-150 before:content-[''] before:absolute before:w-full before:h-full before:scale-0 before:bg-primary before:text-accent z-0 ${
                active && "before:scale-100 before:-z-10 text-accent"
            }`}
        >
            {icon}
        </Link>
    );
}

export default function NavMain() {
    const [activeSection, setActiveSection] = useState<string>("#home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = `#${entry.target.id}`;
                        setActiveSection(sectionId);
                    }
                });
            },
            {
                root: null, // lấy viewport làm root
                threshold: 0.9, // chiếm 50% thì tính là active
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    });

    const handleNavClick = (href: string) => {
        setActiveSection(href);
    };

    return (
        <nav
            id="nav-main"
            className="fixed z-50 
            top-4 left-1/2 -translate-x-1/2 
            md:top-1/2 md:left-6 md:-translate-x-0 md:-translate-y-1/2
            flex flex-row md:flex-col items-center justify-center 
            gap-4 md:gap-6 
            bg-background/70 backdrop-blur-md 
            border border-border rounded-full md:rounded-3xl 
            p-2 md:p-2 shadow-lg"
        >
            <NavItem
                href="#home"
                icon={<House />}
                active={activeSection === "#home"}
                onClick={handleNavClick}
            />
            <NavItem
                href="#about-me"
                icon={<User />}
                active={activeSection === "#about-me"}
                onClick={handleNavClick}
            />
            <NavItem
                href="#my-projects"
                icon={<Folder />}
                active={activeSection === "#my-projects"}
                onClick={handleNavClick}
            />
            <ModeToggle />
        </nav>
    );
}
