"use client";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "$/components/ui/button";
import { FlipWords } from "$/components/ui/flip-words";
import { useScroll } from "$/hooks/useScroll";
import { cn } from "$/lib/utils";
import { gradient } from "$/util/gradient";
import ContentContainer from "./content-container";

export const Funnel = () => {
	const t = useTranslations();
	const { scrollTo } = useScroll();

	const words = [
		t("funnel.jobs.architect"),
		t("funnel.jobs.fullstack"),
		t("funnel.jobs.mobile"),
		t("funnel.jobs.game"),
	];

	return (
		<ContentContainer className="h-screen flex justify-center items-center">
			<div id="top" className="font-bold flex flex-col xl:gap-4">
				<motion.h2
					initial={{ x: -200, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-4xl text-center md:text-6xl xl:text-start "
				>
					{t("funnel.title")}
					<span className={cn(gradient, "bg-clip-text text-transparent")}>
						{t("funnel.name")}
					</span>
				</motion.h2>
				<motion.h3
					initial={{ x: -300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className="text-center md:text-2xl xl:text-4xl xl:text-start mt-4"
				>
					{t("funnel.desc")}

					<FlipWords words={words} />
				</motion.h3>
				<motion.div
					transition={{ delay: 2, duration: 1 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mt-4 flex justify-center xl:justify-start"
				>
					<Button
						variant={"gradient"}
						size={"lg"}
						onClick={() => scrollTo("about")}
					>
						{t("funnel.button")}{" "}
						<ChevronDownIcon className={"animate-bounce size-5"} />
					</Button>
				</motion.div>
			</div>
		</ContentContainer>
	);
};
