export interface ProjectLink {
    label: string;
    href: string;
    isPrimary: boolean;
}

export interface Project {
    id: string;
    terminal_path: string;
    version: string;
    title: string;
    description: string;
    image_src: string;
    image_alt: string;
    tags: string[];
    links: ProjectLink[];
    featured: boolean;
}

export interface WritingEntry {
    id: string;
    type: "DEVLOG" | "THOUGHTS" | "SYSTEM";
    title: string;
    date: string;
    slug: string;
}

export interface StatItem {
    id: string;
    label: string;
    value: string | number;
}
