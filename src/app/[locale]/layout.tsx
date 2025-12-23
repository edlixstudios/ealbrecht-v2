import Header from "$/components/header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import { Footer } from "$/components/footer";
import { Toaster } from "$/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations();

	return {
		title: t("title"),
		description: t("desc"),
	};
};

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	return (
		// biome-ignore lint/a11y/useHtmlLang: <not needed>
		<html suppressHydrationWarning>
			<head>
				<title></title>
				<link rel="icon" href="./icon.png" />
			</head>
			<body className={inter.className}>
				<NextIntlClientProvider locale={locale}>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
