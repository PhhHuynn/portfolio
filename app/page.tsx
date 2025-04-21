import NavMain from "@/components/Nav/NavMain";
import Home from "@/components/Home/Home";
import AboutMe from "@/components/AboutMe/AboutMe";
import Project from "@/components/Projects/Project";
import about from "@/data/about";

export default function Main() {
    return (
        <div>
            <NavMain />
            <main className="space-y-20">
                <Home></Home>
                <AboutMe />
                <Project />
            </main>
            <footer className="pt-10 text-center text-sm text-muted-foreground py-6">
                © {new Date().getFullYear()} {about.name}. Portfolio built with
                Next.js & Tailwind CSS.
            </footer>
        </div>
    );
}
