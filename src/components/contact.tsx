import { gradient } from "$/util/gradient";
import ContentContainer from "./content-container";
import { twMerge } from "tailwind-merge";
import MailForm from "./mail-form";
import { getI18n } from "$/locales/server";

export default async function Contact() {
    const t = await getI18n();

    return (
        <section className={twMerge(gradient)}>
            <div className={`bg-white h-16 w-full relative -top-4 skew-y-1`} />
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
