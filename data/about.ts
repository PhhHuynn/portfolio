import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiGit,
    SiFigma,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { DiMsqlServer } from "react-icons/di";
import { SiShadcnui } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const about = {
    name: "Le Thi Phuong Huyen",
    role: "Front-end Developer",
    img: "/images/avatar.jpg",
    img2: "/images/avatar.jpg",
    education: {
        role: "Third-year student at FPT PolySchool Da Nang.",
        major: "Software Development",
        GPA: "3.98/4",
    },
    intro: "I'm passionate about creating user-friendly, visually appealing websites and constantly enhancing my skills to deliver innovative solutions.",
    codingExperience: 1,
    projects: 3,
    collaborations: 1,
    skills: {
        "Web Development": [
            {
                name: "Next.js",
                icon: SiNextdotjs,
            },
            { name: "React", icon: SiReact, tooltip: "Dynamic UI development" },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
            },
            {
                name: "Shadcn/UI",
                icon: SiShadcnui,
            },
        ],
        "Desktop Development": [
            { name: "C#", icon: TbBrandCSharp },
            { name: "WPF", icon: GiCircuitry },
            {
                name: "WinForms",
                icon: FaWindows,
            },
        ],
        Database: [
            {
                name: "SQL Server",
                icon: DiMsqlServer,
            },
        ],
        Tools: [
            { name: "Git", icon: SiGit },
            { name: "Figma", icon: SiFigma },
        ],
    },
    phone: "+84934814872",
    email: "phuonghuyen.5872@gmail.com",
    address: "Da Nang, Vietnam",
    github: "https://github.com/PhhHuynn",
    facebook: "https://www.facebook.com/le.huyen.933524",
};

export default about;
