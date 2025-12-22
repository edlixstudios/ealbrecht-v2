import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import fullbody from "$/assets/images/me_body_full.png";
import { gradient } from "$/util/gradient";
import ContentContainer from "./content-container";

export default async function About() {
	const t = await getTranslations();

	return (
		<section id="about" className={twMerge(gradient)}>
			<ContentContainer className={"text-white "}>
				<h2 className="text-center text-4xl md:text-6xl font-bold uppercase">
					{t("about.title")}
				</h2>
				<div className={"grid xl:grid-cols-2 gap-8 px-4 py-8 "}>
					<Image
						src={fullbody}
						alt={"Eduard Albrecht"}
						width={500}
						height={500}
						loading="lazy"
						placeholder={"blur"}
						blurDataURL={"/me.jpg"}
						className={
							"rounded-md m-auto aspect-auto bg-linear-to-t from-blue-300/50 to-transparent"
						}
					/>

					<div className="flex flex-col justify-between text-2xl gap-4 text-justify">
						<p>{t("about.desc1")}</p>
						<p>{t("about.desc2")}</p>
						<p>{t("about.desc3")}</p>
						<p>{t("about.desc4")}</p>
						<p>{t("about.desc5")}</p>
					</div>
				</div>
			</ContentContainer>
			<div
				className={`bg-white h-16 w-full relative top-4 -skew-y-1 xl:top-8 2xl:top-12`}
			/>
		</section>
	);
}
