import Footer from "$/components/footer";
import Header from "$/components/header";
import { getI18n } from "$/locales/server";
import I18NProvider from "$/provider/i18n-provider";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "$/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getI18n();

    return {
        title: t("title"),
        description: t("desc"),
    };
};

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={params.locale}>
            <head>
                <link rel="icon" href="./icon.png" />
            </head>
            <body className={inter.className}>
                <I18NProvider locale={params.locale}>
                    <Header />
                    {children}
                    <Footer />
                    <Toaster />
                </I18NProvider>
            </body>
        </html>
    );
}
