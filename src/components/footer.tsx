"use client";

import { ArrowUpToLine } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaGithubSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import { MeondiIcon } from "$/components/icon/meondi-icon";
import { useScroll } from "$/hooks/useScroll";
import ContentContainer from "./content-container";
import { Button } from "./ui/button";

export const Footer = () => {
	const t = useTranslations();
	const { scrollToTop } = useScroll();

	return (
		<footer className="bg-slate-900 text-white">
			<ContentContainer>
				<div className="flex justify-center">
					<Button
						variant={"ghost"}
						onClick={scrollToTop}
						size={"icon"}
						className={
							"size-16 xl:size-24 rounded-md transition-all  hover:scale-110"
						}
					>
						<ArrowUpToLine className={"size-full"} />
					</Button>
				</div>
				<div className="mt-4 xl:mt-8">
					<p className="text-center text-3xl">{t("footer.title")}</p>
					<div className="flex my-2 justify-center gap-2">
						<Link
							className={
								"w-16 h-16 transition-all hover:text-sky-500 hover:scale-105"
							}
							href={"https://www.linkedin.com/in/eduard-albrecht-454779199/"}
						>
							<FaLinkedin className={"w-full h-full"} />
						</Link>

						<Link
							className={
								"w-16 h-16 transition-all hover:text-emerald-500 hover:scale-105"
							}
							href={"https://www.xing.com/profile/Eduard_Albrecht3/cv"}
						>
							<FaXingSquare className={"w-full h-full"} />
						</Link>

						<Link
							className={
								"w-16 h-16 transition-all hover:text-indigo-500 hover:scale-105"
							}
							href={"https://github.com/edlixstudios"}
						>
							<FaGithubSquare className={"w-full h-full"} />
						</Link>
						<Link
							className={"transition-all hover:text-cyan-500 hover:scale-105"}
							href={"https://meondi.com"}
						>
							<MeondiIcon />
						</Link>
					</div>
					<div className="mt-4">
						<hr className="xl:w-1/3 mx-auto h-1" />
						<p className="text-center">
							{t("footer.createdBy", { date: new Date().getFullYear() })}
						</p>
					</div>
				</div>
			</ContentContainer>
		</footer>
	);
};
