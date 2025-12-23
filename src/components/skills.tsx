"use client";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { cn } from "$/lib/utils";
import { gradient } from "$/util/gradient";
import {
	automationSkills,
	backendSkills,
	backendSliderSkills,
	databaseSkills,
	devOpsSkills,
	devOpsSliderSkills,
	frontendSkills,
	frontendSliderSkills,
	languagesSkills,
	mobileDevelopmentSkills,
	programmingLanguagesSkill,
	programmingLanguagesSliderSkill,
	projectManagementSkills,
	projectManagementSliderSkills,
	testingSkills,
	testingSliderSkills,
	unitySkills,
	unitySliderSkills,
} from "$/util/skillts";
import ContentContainer from "./content-container";
import LogoLoop from "./LogoLoop";
import { Skilltree } from "./skilltree";

const EncryptedText = dynamic(() => import("$/components/ui/encrypted-text"), {
	ssr: false,
});

export const Skills = () => {
	const t = useTranslations();
	const skills = [
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

	const skillString = `{${t("skills.title")}}`;

	return (
		<ContentContainer>
			<div className="w-full flex justify-center">
				<EncryptedText
					text={skillString}
					encryptedClassName="text-neutral-500"
					revealDelayMs={100}
					className={cn(
						"bg-clip-text text-transparent text-center text-4xl md:text-6xl font-bold p-1",
						gradient,
					)}
				/>
			</div>
			<div className={"grid xl:grid-cols-3 my-16 gap-8"}>
				{skills.map((skill) => (
					<Skilltree key={skill.skillCategory} skillTree={skill} />
				))}
			</div>{" "}
			<LogoLoop
				logos={[
					...frontendSliderSkills,
					...backendSliderSkills,
					...unitySliderSkills,
					...projectManagementSliderSkills,
					...devOpsSliderSkills,
					...programmingLanguagesSliderSkill,
					...testingSliderSkills,
				]}
				speed={120}
				direction="left"
				logoHeight={48}
				gap={40}
				hoverSpeed={0}
				scaleOnHover
				fadeOut
				fadeOutColor="#ffffff"
				ariaLabel="Technology partners"
			/>
		</ContentContainer>
	);
};
