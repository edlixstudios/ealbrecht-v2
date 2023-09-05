import { getI18n } from "$/locales/server";
import { twMerge } from "tailwind-merge";
import ContentContainer from "./content-container";
import { gradient } from "$/util/gradient";
import { Button } from "./ui/button";
import Link from "next/link";

export default async function Funnel() {
    const t = await getI18n();
    return (
        <ContentContainer className="h-screen flex justify-center items-center">
            <div id="top" className="font-bold flex flex-col xl:gap-4">
                <h2 className="text-4xl text-center md:text-6xl xl:text-start ">
                    {t("funnel.title")}
                    <span className={twMerge(gradient, "bg-clip-text text-transparent")}>
                        {t("funnel.name")}
                    </span>
                </h2>
                <h3 className=" text-center md:text-2xl xl:text-4xl xl:text-start mt-4">
                    {t("funnel.desc")}
                </h3>
                <div className="mt-4 flex justify-center xl:justify-start">
                    <Button variant={"gradient"} size={"lg"} asChild>
                        <Link href={"#about"}>{t("funnel.button")}</Link>
                    </Button>
                </div>
            </div>
        </ContentContainer>
    );
}
