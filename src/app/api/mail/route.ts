import { EmailForm } from "$/components/mail-form";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

export async function POST(request: Request) {
    const body: EmailForm = await request.json();

    const msg = {
        from: process.env.MAIL_USER,
        to: process.env.TO_MAIL,
        subject: `Neue Kontaktanfrage von ${body.email}`,
        text: body.message,
    };

    const sendMail = await transporter.sendMail(msg);

    if (!sendMail) {
        return NextResponse.json({ error: true });
    }

    return NextResponse.json({ error: false });
}
