"use client";

import { useChangeLocale, useCurrentLocale, useI18n } from "$/locales/client";
import React, { useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import DE from "country-flag-icons/react/3x2/DE";
import US from "country-flag-icons/react/3x2/US";
import { Loader2 } from "lucide-react";

export const LocaleSwitcher = () => {
    const locale = useCurrentLocale();
    const t = useI18n();
    const changeLocale = useChangeLocale();
    const [isPending, setTransition] = useTransition();

    function handleLanguageChange(value: string) {
        setTransition(() => changeLocale(value as typeof locale));
    }

    if (isPending) return <Loader2 className="animate-spin w-7 h-7"></Loader2>;

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
