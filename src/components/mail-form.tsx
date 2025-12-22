"use client";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { type FormEvent, useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export type EmailForm = {
	email: string;
	name: string;
	message: string;
};

export default function MailForm() {
	const t = useTranslations();
	const [emailForm, setEmailForm] = useState<EmailForm>({
		email: "",
		name: "",
		message: "",
	});

	const [isPending, setTransition] = useTransition();

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setTransition(async () => {
			const res = await fetch("/api/mail", {
				method: "POST",
				body: JSON.stringify(emailForm),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.status === 200) {
				setEmailForm({
					email: "",
					name: "",
					message: "",
				});

				toast.success(t("contact.form.success"));
			} else {
				toast.error(t("contact.form.error"));
			}
		});
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="w-2/3 xl:w-1/3 flex flex-col gap-2"
		>
			<Input
				name="name"
				value={emailForm.name}
				onChange={(e) =>
					setEmailForm((prev) => ({ ...prev, name: e.target.value }))
				}
				type="text"
				required
				placeholder={t("contact.form.name")}
			/>
			<Input
				name="email"
				value={emailForm.email}
				onChange={(e) =>
					setEmailForm((prev) => ({ ...prev, email: e.target.value }))
				}
				type="email"
				required
				placeholder={t("contact.form.email")}
			/>
			<Textarea
				name="message"
				rows={10}
				value={emailForm.message}
				onChange={(e) =>
					setEmailForm((prev) => ({ ...prev, message: e.target.value }))
				}
				required
				placeholder={t("contact.form.message")}
				className="resize-none"
			/>
			<Button>
				{t("contact.form.submit")}
				{isPending ? <Loader2 className={"animate-spin ml-4"} /> : null}
			</Button>
		</form>
	);
}
