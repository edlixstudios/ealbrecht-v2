"use client";
import { I18nProviderClient } from "$/locales/client";
import { PropsWithChildren } from "react";

export default function I18NProvider({ locale, children }: PropsWithChildren<{ locale: string }>) {
    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
