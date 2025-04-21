"use client";

import { useState } from "react";
import projects from "@/data/projects";
import TechnologyFilter from "./TechnologyFilter";
import ProjectList from "./ProjectList";

export default function ProjectContainer() {
    const [filter, setFilter] = useState<string[]>(["All"]);

    const uniqueTechnologies = [
        ...new Set(projects.flatMap((project) => project.technologies)),
    ];

    const filteredProjects = projects.filter((project) =>
        filter.includes("All")
            ? true
            : filter.every((tech) => project.technologies.includes(tech))
    );

    return (
        <div>
            <TechnologyFilter
                technologies={uniqueTechnologies}
                current={filter}
                onChange={setFilter}
            />

            <ProjectList projects={filteredProjects} />
        </div>
    );
}
