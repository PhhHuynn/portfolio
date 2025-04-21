import React from "react";
import about from "@/data/about";
import { Button } from "../ui/button";
import { Download, Github, Mouse, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
    return (
        <section id="home" className="py-12 md:py-16 mt-10">
            <div className=" text-center grid-layout mx-auto px-4 md:px-6 md:grid md:text-left md:grid-cols-12 md:gap-6 flex flex-col items-center gap-8">
                <div className="md:col-start-2 md:col-span-5 col-span-12">
                    <div className="mb-6">
                        <p className="text-lg">Hello, I&apos;m</p>
                        <h1 className="font-bold my-4 text-3xl sm:text-4xl md:text-5xl">
                            {about.name}
                        </h1>
                        <h2 className="text-base sm:text-lg md:text-xl">
                            A {about.role}
                        </h2>
                    </div>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-4">
                        <Button size="lg">
                            <Download className="mr-2 h-4 w-4" />
                            Download CV
                        </Button>
                        <Link
                            href={about.github}
                            className="rounded-full p-2 hover:text-primary hover:bg-primary/10 transition-all duration-100"
                        >
                            <Github className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
                <Image
                    src={about.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt="Avatar"
                    className="animate-blob col-span-12 md:col-span-5 w-full md:w-11/12 h-auto aspect-square object-cover rounded-full shadow-xl/20"
                />
                <div className="hidden md:flex md:flex-col md:col-start-12 md:col-span-1 animate-[bounce_2s_ease-in-out_infinite] delay-500 text-primary items-center order-4">
                    <Mouse className="h-6 w-6" />
                    <div className="my-8 text-sm rounded-2xl rotate-90 origin-center">
                        Scroll down
                    </div>
                    <ChevronDown className="h-6 w-6" />
                </div>
            </div>
        </section>
    );
}
