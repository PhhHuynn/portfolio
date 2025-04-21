"use client";

type TechnologyFilterProps = {
    technologies: string[];
    current: string[];
    onChange: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TechnologyFilter({
    technologies,
    current,
    onChange,
}: TechnologyFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["All", ...technologies].map((tech) => {
                const isActive = current.includes(tech);
                return (
                    <button
                        key={tech}
                        onClick={() =>
                            tech === "All"
                                ? onChange(["All"])
                                : onChange((prev) =>
                                      prev.includes(tech)
                                          ? prev.filter((item) => item !== tech)
                                          : [
                                                ...prev.filter(
                                                    (item) => item !== "All"
                                                ),
                                                tech,
                                            ]
                                  )
                        }
                        className={`px-4 py-2 rounded-full border transition ${
                            isActive
                                ? "bg-primary text-white border-primary"
                                : "bg-transparent text-primary border-primary"
                        }`}
                    >
                        {tech}
                    </button>
                );
            })}
        </div>
    );
}
