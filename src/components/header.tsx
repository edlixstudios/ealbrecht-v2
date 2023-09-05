import { getI18n } from "$/locales/server";
import { Amatic_SC } from "next/font/google";
import Image from "next/image";

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });

export default async function Header() {
    const t = await getI18n();

    return (
        <header className="w-full py-4 px-[10vw] flex items-center justify-center absolute top-0 xl:justify-between">
            <div className="flex items-center gap-2">
                <Image src={"/me.svg"} width={50} height={50} alt={"Me"} />
                <h1 className={`${amatic.className} text-4xl`}>{"<ALBR<CHT.DEV"}</h1>
            </div>
        </header>
    );
}
