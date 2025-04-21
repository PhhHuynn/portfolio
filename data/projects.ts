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

const projects: Project[] = [
    {
        id: 1,
        type: "Personal project",
        name: "Portfolio",
        description: [
            "Built a portfolio website to display my skills to potential employers.",
            "Integrated features like {dark mode, responsive layout, and animations} to enhance user experience.",
        ],
        demoWeb: "https://portfolio-phhuynns-projects.vercel.app",
        technologies: [
            "HTML/CSS",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "ShadCN UI",
        ],
        repoUrl: "https://github.com/PhhHuynn/My Portfolio",
        date: "04/2025",
        slug: "portfolio",
    },
    {
        id: 2,
        type: "6 members",
        name: "UStock",
        demoWeb: null,
        description: [
            "{Integrated Gmail login} using user authentication.",
            "Developed the {inventory management interface and product statistics dashboard} using WPF and XAML, supporting data tracking and analysis.",
            "{Reviewed and evaluated source code} from team members to ensure code quality and project progress.",
        ],
        technologies: ["C#", "SQL Server"],
        repoUrl: "https://github.com/haianh1711/QuanLyHangHoa",
        date: "01/2025 - 2/2025",
        slug: "ustock",
    },
    {
        id: 3,
        type: "Personal project",
        name: "TaH Fashion Store",
        demoWeb: null,
        description: [
            "Integrate {countdown timer} using JavaScript to display promotional time.",
            "Build functionality to add, remove, and update products in the {shopping cart} with automatic total price calculation.",
            "Use {SCSS to optimize CSS code} for easier readability and maintainability.",
        ],
        technologies: ["HTML/CSS", "SASS", "JavaScript"],
        repoUrl: "https://github.com/PhhHuynn/Fashion-shop",
        date: "07/2024 - 08/2024",
        slug: "TaH",
    },
];

export default projects;
