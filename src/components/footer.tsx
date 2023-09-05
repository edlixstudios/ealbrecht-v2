import { getI18n } from "$/locales/server";
import Link from "next/link";
import ContentContainer from "./content-container";
import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";
import { FaXingSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default async function Footer() {
    const t = await getI18n();

    return (
        <footer className="bg-slate-900 text-white">
            <ContentContainer>
                <div className="flex justify-center">
                    <Link
                        href={"#top"}
                        className={
                            "w-14 h-14 xl:h-24 xl:w-24 rounded-md transition-all hover:bg-slate-800 hover:scale-110"
                        }
                    >
                        <ArrowUpToLine className={"w-full h-full"} />
                    </Link>
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
}
