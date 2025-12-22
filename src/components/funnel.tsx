"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "$/components/ui/button";
import { cn } from "$/lib/utils";
import { gradient } from "$/util/gradient";
import ContentContainer from "./content-container";

export default function Funnel() {
	const t = useTranslations();
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
					className=" text-center md:text-2xl xl:text-4xl xl:text-start mt-4"
				>
					{t("funnel.desc")}
				</motion.h3>
				<motion.div
					transition={{ delay: 2, duration: 1 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mt-4 flex justify-center xl:justify-start"
				>
					<Button variant={"gradient"} size={"lg"} asChild>
						<Link href={"#about"}>{t("funnel.button")}</Link>
					</Button>
				</motion.div>
			</div>
		</ContentContainer>
	);
}
