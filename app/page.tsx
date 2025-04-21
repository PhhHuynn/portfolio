import NavMain from "@/components/Nav/NavMain";
import Home from "@/components/Home/Home";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Main() {
    return (
        <div>
            <NavMain />
            <Home></Home>
            <AboutMe />
        </div>
    );
}
