"use client";
import { I18nProviderClient } from "$/locales/client";
import { PropsWithChildren } from "react";
import en from "$/locales/en";

export default function I18NProvider({ locale, children }: PropsWithChildren<{ locale: string }>) {
    return (
        <I18nProviderClient locale={locale} fallbackLocale={en}>
            {children}
        </I18nProviderClient>
    );
}
