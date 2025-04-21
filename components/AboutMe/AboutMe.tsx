import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import about from "@/data/about";

export default function AboutMe() {
    return (
        <section id="about-me">
            <h1 className="text-center text-4xl text-primary font-bold">
                About me
            </h1>
            <h2 className="mb-8 text-center text-sm text-accent-foreground">
                Resume
            </h2>
            <div className="grid-layout">
                <div className="hidden md:flex md:md:col-start-2 col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">About me</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Image
                                src={about.img2}
                                width={500}
                                height={500}
                                alt="avatar"
                                className="mb-3 rounded-2xl shadow-xl w-full aspect-square object-cover"
                            />
                            <p>{about.intro}</p>
                        </CardContent>
                    </Card>
                </div>
                <Tabs
                    defaultValue="education"
                    className="md:col-span-7 col-span-12 mx-5"
                >
                    <TabsList className="grid w-full grid-cols-3 ">
                        <TabsTrigger value="about-me" className="md:hidden">
                            About me
                        </TabsTrigger>
                        <TabsTrigger
                            value="contact"
                            className="hidden md:block"
                        >
                            Contact
                        </TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about-me">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    About me
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>{about.intro}</p>
                                <hr className="my-3" />
                                <ul>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Email:
                                        </span>{" "}
                                        {about.email}
                                    </li>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Github:
                                        </span>{" "}
                                        {about.github}
                                    </li>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Address:
                                        </span>{" "}
                                        {about.address}
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="contact">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Contact
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ul>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Email:
                                        </span>{" "}
                                        {about.email}
                                    </li>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Github:
                                        </span>{" "}
                                        {about.github}
                                    </li>
                                    <li className="text-2sm">
                                        <span className="font-black">
                                            Address:
                                        </span>{" "}
                                        {about.address}
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="education">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Education
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="font-semibold text-primary">
                                    {about.education.major}
                                </p>
                                <p className="text-lg font-bold">
                                    {about.education.role}
                                </p>
                                <p>GPA: {about.education.GPA}</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="skills">
                        <Card>
                            <CardHeader>
                                <CardTitle>Skills</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(about.skills).map(
                                    ([category, items]) => (
                                        <div
                                            key={category}
                                            className="space-y-1"
                                        >
                                            <h3 className="text-lg font-semibold">
                                                {category}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                                                {items.map((skill) => (
                                                    <div
                                                        key={skill.name}
                                                        className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent"
                                                    >
                                                        <skill.icon className="text-xl" />{" "}
                                                        <span>
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
