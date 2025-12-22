"use client";

import DE from "country-flag-icons/react/3x2/DE";
import US from "country-flag-icons/react/3x2/US";
import { useParams } from "next/dist/client/components/navigation";
import { useTranslations } from "next-intl";
import { redirect } from "$/i18n/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export const LocaleSwitcher = () => {
	const { locale } = useParams<{ locale: string }>();
	const t = useTranslations();

	async function handleLanguageChange(value: string) {
		redirect({ href: "/", locale: value });
	}

	return (
		<Select defaultValue={locale} onValueChange={handleLanguageChange}>
			<SelectTrigger className="w-20">
				<SelectValue placeholder={t("pickLang")} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="de" className="flex">
					{/* Deutsch */}
					<DE className="w-7" />
				</SelectItem>
				<SelectItem value="en">
					<US className="w-7" />
				</SelectItem>
			</SelectContent>
		</Select>
	);
};
