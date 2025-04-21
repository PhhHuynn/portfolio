import React from "react";
import ProjectContainer from "./ProjectContainer";

export default function Project() {
    return (
        <section id="my-projects">
            <h1 className="text-center text-4xl text-primary font-bold">
                Projects
            </h1>
            <h2 className="mb-8 text-center text-sm text-accent-foreground">
                What I&apos;ve Built
            </h2>
            <ProjectContainer />
        </section>
    );
}
