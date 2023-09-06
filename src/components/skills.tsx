import { prisma } from "$/lib/prisma";
import { getI18n } from "$/locales/server";
import { gradient } from "$/util/gradient";

import ContentContainer from "./content-container";
import { twMerge } from "tailwind-merge";
import { Skilltree } from "./skilltree";

async function loadSkills() {
    try {
        const allSkills = await prisma.myskills.findMany({
            include: {
                skills: true,
            },
        });

        return allSkills;
    } catch (e) {
        return [];
    }
}

export default async function About() {
    const t = await getI18n();
    const skills = await loadSkills();

    return (
        <ContentContainer>
            <div className="w-full flex justify-center">
                <h2
                    className={twMerge(
                        "text-center text-4xl md:text-6xl font-bold p-1 bg-clip-text text-transparent inline",
                        gradient
                    )}
                >
                    {"{"}
                    {t("skills.title")}
                    {"}"}
                </h2>
            </div>
            <div className={"grid xl:grid-cols-3 my-16 gap-8"}>
                {skills.map((skill) => (
                    <Skilltree key={skill.id} skill={skill} />
                ))}
            </div>
        </ContentContainer>
    );
}
