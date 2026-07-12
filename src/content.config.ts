import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        terminal_path: z.string(),
        version: z.string(),
        title: z.string(),
        description: z.string(),
        image_src: z.string().optional(),
        image_alt: z.string().optional(),
        tags: z.array(z.string()).default([]),
        links: z
            .array(
                z.object({
                    label: z.string(),
                    href: z.string(),
                    isPrimary: z.boolean(),
                }),
            )
            .default([]),
        featured: z.boolean().default(false),
        stats: z
            .array(
                z.object({
                    label: z.string(),
                    value: z.union([z.string(), z.number()]),
                }),
            )
            .default([]),
    }),
});

const writings = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
    schema: z.object({
        type: z.enum(["DEVLOG", "THOUGHTS", "SYSTEM"]),
        title: z.string(),
        date: z.string(),
        projectId: z.string().optional(),
    }),
});

export const collections = { projects, writings };
