import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "contact@sakshamshukla.in",
      to: "shuklasaksham729@gmail.com",
      subject: `New message from ${name} — sakshamshukla.in`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f56038;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
          <hr/>
          <p style="color: #999; font-size: 12px;">Sent from sakshamshukla.in contact form</p>
        </div>
      `,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
