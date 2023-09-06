"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "$/locales/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import DE from "country-flag-icons/react/3x2/DE";
import US from "country-flag-icons/react/3x2/US";

export const LocaleSwitcher = () => {
    const locale = useCurrentLocale();
    const t = useI18n();
    const changeLocale = useChangeLocale();

    function handleLanguageChange(value: string) {
        changeLocale(value as typeof locale);
    }

    return (
        <Select defaultValue={locale} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[80px]">
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
