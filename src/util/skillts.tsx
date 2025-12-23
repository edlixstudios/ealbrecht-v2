import {
	FaAngular,
	FaConfluence,
	FaFlask,
	FaGit,
	FaJava,
	FaJira,
	FaNode,
	FaPhp,
	FaPython,
	FaReact,
	FaUnity,
	FaVuejs,
} from "react-icons/fa";
import { RiNextjsFill, RiNotionFill, RiTailwindCssFill } from "react-icons/ri";
import {
	SiCypress,
	SiDart,
	SiDeno,
	SiJavascript,
	SiJest,
	SiRedux,
	SiSelenium,
	SiTeamcity,
	SiTypescript,
	SiVite,
	SiVitest,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandThreejs } from "react-icons/tb";
import type { LogoItem } from "$/components/LogoLoop";
import type { Skilltree } from "$/components/skilltree";

export const frontendSkills: Skilltree = {
	skillCategory: "Frontend",
	skills: [
		"TailwindCSS",
		"ReactJS",
		"NextJS",
		"ZustandJS",
		"ThreeJS",
		"VueJS",
		"Angular",
		"Redux",
	],
};

export const frontendSliderSkills: LogoItem[] = [
	{
		node: <FaReact />,
		title: "React",
	},
	{
		node: <FaVuejs />,
		title: "VueJS",
	},
	{
		node: <FaAngular />,
		title: "Angular",
	},
	{
		node: <SiRedux />,
		title: "Redux",
	},
	{
		node: <RiNextjsFill />,
		title: "NextJS",
	},
	{
		node: <RiTailwindCssFill />,
		title: "TailwindCSS",
	},
	{
		node: <TbBrandThreejs />,
		title: "ThreeJS",
	},
	{
		node: <SiVite />,
		title: "Vite",
	},
];

export const backendSkills: Skilltree = {
	skillCategory: "Backend",
	skills: ["NodeJS", "PHP", "Flask", "APS.NET", "Java", "Deno"],
};

export const backendSliderSkills: LogoItem[] = [
	{
		node: <FaNode />,
		title: "NodeJS",
	},
	{
		node: <FaPhp />,
		title: "PHP",
	},
	{
		node: <FaFlask />,
		title: "Flask",
	},
	{
		node: <SiDeno />,
		title: "Deno",
	},
];

export const mobileDevelopmentSkills: Skilltree = {
	skillCategory: "Mobile Development",
	skills: ["Ionic", "React Native / Expo", "Flutter"],
};

export const databaseSkills: Skilltree = {
	skillCategory: "Database",
	skills: [
		"Prisma ORM",
		"DrizzleORM",
		"MongoDB",
		"MySQL / MariaDB",
		"PostgresSQL",
	],
};

export const programmingLanguagesSkill: Skilltree = {
	skillCategory: "Programming",
	skills: ["Typescript / Javacsript", "C#", "Python", "Dart", "Java"],
};

export const programmingLanguagesSliderSkill: LogoItem[] = [
	{
		node: <FaJava />,
		title: "Java",
	},
	{
		node: <FaPython />,
		title: "Python",
	},
	{
		node: <SiTypescript />,
		title: "Typescript",
	},
	{
		node: <TbBrandCSharp />,
		title: "C#",
	},
	{
		node: <SiDart />,
		title: "Dart",
	},
	{
		node: <SiJavascript />,
		title: "Javascript",
	},
];

export const devOpsSkills: Skilltree = {
	skillCategory: "Dev Ops",
	skills: ["git", "Docker / Docker Compose", "TeamCity", "Github Actions"],
};

export const devOpsSliderSkills: LogoItem[] = [
	{
		node: <FaGit />,
		title: "Git",
	},
	{
		node: <SiTeamcity />,
		title: "TeamCity",
	},
];

export const projectManagementSkills: Skilltree = {
	skillCategory: "Project Management",
	skills: ["Jira", "Scrum", "Confluence", "Notion"],
};

export const projectManagementSliderSkills: LogoItem[] = [
	{
		node: <FaJira />,
		title: "Jira",
	},
	{
		node: <RiNotionFill />,
		title: "Notion",
	},
	{
		node: <FaConfluence />,
		title: "Confluence",
	},
];

export const testingSkills: Skilltree = {
	skillCategory: "Unit + E2E Testing",
	skills: ["Playwright", "Vitest", "Selenium", "Jest", "Cypress"],
};

export const testingSliderSkills: LogoItem[] = [
	{
		node: <SiCypress />,
		title: "Cypress",
	},
	{
		node: <SiVitest />,
		title: "Vitest",
	},
	{
		node: <SiSelenium />,
		title: "Selenium",
	},
	{
		node: <SiJest />,
		title: "Jest",
	},
];

export const unitySkills: Skilltree = {
	skillCategory: "Unity",
	skills: ["Unity Overall", "Unity 2D", "Unity 3D", "Multiplayer"],
};

export const unitySliderSkills: LogoItem[] = [
	{
		node: <FaUnity />,
		title: "Unity",
	},
];

export const automationSkills: Skilltree = {
	skillCategory: "Automation",
	skills: ["Robocorp"],
};

export const languagesSkills: Skilltree = {
	skillCategory: "Languages",
	skills: ["German", "English", "Russian"],
};
