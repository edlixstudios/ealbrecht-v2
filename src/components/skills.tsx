import { prisma } from "$/lib/prisma";
import { getI18n } from "$/locales/server";
import { gradient } from "$/util/gradient";

import ContentContainer from "./content-container";
import { twMerge } from "tailwind-merge";
import { Skilltree } from "./skilltree";
import {
    automationSkills,
    backendSkills,
    databaseSkills,
    devOpsSkills,
    frontendSkills,
    languagesSkills,
    mobileDevelopmentSkills,
    programmingLanguagesSkill,
    projectManagementSkills,
    testingSkills,
    unitySkills,
} from "$/util/skillts";

function loadSkills(): Skilltree[] {
    return [
        frontendSkills,
        backendSkills,
        mobileDevelopmentSkills,
        databaseSkills,
        programmingLanguagesSkill,
        devOpsSkills,
        projectManagementSkills,
        testingSkills,
        unitySkills,
        automationSkills,
        languagesSkills,
    ];
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
                    <Skilltree key={skill.skillCategory} skill={skill} />
                ))}
            </div>
        </ContentContainer>
    );
}
