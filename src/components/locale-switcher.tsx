"use client";

import DE from "country-flag-icons/react/3x2/DE";
import US from "country-flag-icons/react/3x2/US";
import { useParams } from "next/dist/client/components/navigation";
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

	function handleLanguageChange(value: string | null) {
		if (!value) return;

		redirect({ href: "/", locale: value });
	}

	return (
		<Select defaultValue={locale} onValueChange={handleLanguageChange}>
			<SelectTrigger>
				<SelectValue>
					{locale === "de" ? (
						<span className="flex items-center gap-2">
							<DE />
							Deutsch
						</span>
					) : (
						<span className="flex items-center gap-2">
							<US />
							English
						</span>
					)}
				</SelectValue>
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="de" className="flex">
					<DE />
					Deutsch
				</SelectItem>
				<SelectItem value="en" className={"flex items-center"}>
					<US />
					English
				</SelectItem>
			</SelectContent>
		</Select>
	);
};
