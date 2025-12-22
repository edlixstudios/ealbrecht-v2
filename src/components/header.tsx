import { Amatic_SC } from "next/font/google";
import Image from "next/image";
import { LocaleSwitcher } from "./locale-switcher";

const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });

export default async function Header() {
	return (
		<header className="w-full py-4 px-[10vw] flex flex-col items-center justify-center absolute top-0 xl:flex-row xl:justify-between">
			<div className="flex items-center gap-2">
				<Image src={"/me-logo.svg"} width={50} height={50} alt={"Me"} />
				<h1 className={`${amatic.className} text-4xl`}>{"<ALBR<CHT.DEV"}</h1>
			</div>
			<LocaleSwitcher />
		</header>
	);
}
