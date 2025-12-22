"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { cn } from "$/lib/utils";
import { gradient } from "$/util/gradient";
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
import ContentContainer from "./content-container";
import { Skilltree } from "./skilltree";

const EncryptedText = dynamic(() => import("$/components/ui/encrypted-text"), {
	ssr: false,
});

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

export const Skills = () => {
	const t = useTranslations();
	const skills = loadSkills();

	const skillString = `{${t("skills.title")}}`;

	return (
		<ContentContainer>
			<div className="w-full flex justify-center">
				<EncryptedText
					text={skillString}
					encryptedClassName="text-neutral-500"
					revealDelayMs={50}
					className={cn(
						"bg-clip-text text-transparent text-center text-4xl md:text-6xl font-bold p-1",
						gradient,
					)}
				/>
			</div>
			<div className={"grid xl:grid-cols-3 my-16 gap-8"}>
				{skills.map((skill) => (
					<Skilltree key={skill.skillCategory} skill={skill} />
				))}
			</div>
		</ContentContainer>
	);
};
