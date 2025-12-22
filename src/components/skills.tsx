import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
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
	const t = await getTranslations();
	const skills = loadSkills();

	return (
		<ContentContainer>
			<div className="w-full flex justify-center">
				<h2
					className={twMerge(
						"text-center text-4xl md:text-6xl font-bold p-1 bg-clip-text text-transparent inline",
						gradient,
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
