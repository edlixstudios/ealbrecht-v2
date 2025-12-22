import { getTranslations } from "next-intl/server";
import { twMerge } from "tailwind-merge";
import { gradient } from "$/util/gradient";
import ContentContainer from "./content-container";
import MailForm from "./mail-form";

export default async function Contact() {
	const t = await getTranslations();

	return (
		<section className={twMerge(gradient)}>
			<div
				className={`bg-white h-16 w-full relative bottom-4 skew-y-1 xl:bottom-8 2xl:bottom-12`}
			/>
			<ContentContainer className={"text-white "}>
				<h2 className="text-4xl text-center md:text-6xl font-bold uppercase">
					{t("contact.title")}
				</h2>

				<p className="text-center my-6 md:text-xl">{t("contact.desc")}</p>
				<div className="flex justify-center">
					<MailForm />
				</div>
			</ContentContainer>
		</section>
	);
}
