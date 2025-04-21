import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { SiGit } from "react-icons/si";
import { MdWeb } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

export interface Project {
    id: number;
    type: string;
    name: string;
    description: string[];
    technologies: string[];
    repoUrl: string;
    demoWeb: string | null;
    date: string;
    slug: string;
}

type ProjectListProps = {
    projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="grid-layout md:grid-cols-2 lg:grid-cols-3  ">
            <div className="col-span-12 md:col-start-2 md:col-span-10 grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <Card className="mx-5 md:mx-3" key={project.id}>
                        <CardHeader>
                            <p className="text-sm text-gray-500">
                                {project.type}
                            </p>
                            <h3 className="text-3xl font-bold text-primary">
                                {project.name}
                            </h3>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <Image
                                src={`/images/project/${project.slug}.png`}
                                width={400}
                                height={400}
                                alt={project.name}
                                className="w-full h-56 border-2 object-cover rounded-2xl"
                            ></Image>
                            {project.description.map(
                                (line: string, i: number) => (
                                    <p
                                        key={i}
                                        className="text-accent-foreground"
                                    >
                                        {line}
                                    </p>
                                )
                            )}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map(
                                    (tech: string, i: number) => (
                                        <span
                                            key={i}
                                            className="bg-muted px-2 py-1 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                        </CardContent>
                        <CardFooter className="md:flex-1 md:items-end flex justify-between text-sm text-muted-foreground">
                            <span>{project.date}</span>
                            <div className="flex flex-row gap-4">
                                {project.demoWeb && (
                                    <Link
                                        href={project.repoUrl}
                                        target="_blank"
                                        className="text-primary hover:underline flex items-center gap-1"
                                    >
                                        <MdWeb size={16} /> Web
                                    </Link>
                                )}
                                <Link
                                    href={project.repoUrl}
                                    target="_blank"
                                    className="text-primary hover:underline flex items-center gap-1"
                                >
                                    <SiGit size={16} /> Repo
                                </Link>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
