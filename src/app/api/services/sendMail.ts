import { createTransport } from "nodemailer";

export const sendMail = async (formData: ReadableStream<Uint8Array>) => {
    try {
        const formDataJSON = await new Response(formData).json();
        const transporter = createTransport({
            service: "Gmail",
            host: process.env.API_MAIL_HOST,
            auth: {
                user: process.env.API_MAIL_USER,
                pass: process.env.API_MAIL_PASS,
            },
        });
        let message = "";
        message = `
      <p>Nom: ${formDataJSON.name}</p>
      <p>Email: ${formDataJSON.email}</p>
      <p>Message: ${formDataJSON.message}
    `;

        await transporter.sendMail({
            from: formDataJSON.email,

            to: process.env.API_MAIL_USER,

            subject: `message de contact de ${formDataJSON.name}`,

            html: message,
        });
    } catch (err) {
        console.log("Error catched by Service : " + (err as Error).message);

        throw new Error("Error occurred with the service");
    }
};
