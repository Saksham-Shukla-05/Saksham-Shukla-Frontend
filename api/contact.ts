import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Email 1 — notify you
    await resend.emails.send({
      from: "contact@sakshamshukla.in",
      to: "shuklasaksham729@gmail.com",
      subject: `New message from ${name} via sakshamshukla.in`,
      replyTo: email,
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
    });

    // Email 2 — thank you to the sender
    await resend.emails.send({
      from: "Saksham Shukla <contact@sakshamshukla.in>",
      to: email,
      subject: `Thanks for getting in touch, ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background-color: #1F1D1B; color: #EDE7DD; border: 1px solid rgba(237,231,221,0.08); border-radius: 6px; padding: 48px 40px;">

            <p style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #C2613C; margin: 0 0 28px;">
              Message received
            </p>

            <h1 style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 26px; font-weight: 700; line-height: 1.35; color: #EDE7DD; margin: 0 0 18px;">
              Thanks for getting in touch, ${name}.
            </h1>

            <p style="font-size: 14px; line-height: 1.8; color: #AFA89D; margin: 0 0 28px;">
              I've received your message and will reply within 24 to 48 hours. Here's a copy of what you sent, for your records.
            </p>

            <div style="background-color: #28251F; border: 1px solid rgba(237,231,221,0.06); border-radius: 8px; padding: 20px 24px; margin: 0 0 32px;">
              <p style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #756E64; margin: 0 0 10px;">
                Your message
              </p>
              <p style="font-size: 14px; line-height: 1.7; color: #EDE7DD; margin: 0;">
                ${message}
              </p>
            </div>

            <p style="font-size: 14px; line-height: 1.8; color: #AFA89D; margin: 0 0 36px;">
              While you wait, feel free to look through my work at
              <a href="https://sakshamshukla.in" style="color: #C2613C; text-decoration: none; font-weight: 600;">sakshamshukla.in</a>
              or connect on
              <a href="https://www.linkedin.com/in/sakshamshukla-dev/" style="color: #C2613C; text-decoration: none; font-weight: 600;">LinkedIn</a>.
            </p>

            <div style="border-top: 1px solid rgba(237,231,221,0.06); padding-top: 24px;">
              <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17px; font-weight: 700; margin: 0 0 4px;">
                <span style="color: #EDE7DD;">Saksham </span><span style="color: #C2613C; font-weight: 400;">Shukla</span>
              </p>
              <p style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #756E64; margin: 0;">
                Full Stack Engineer
              </p>
            </div>

          </div>

          <p style="font-family: 'Courier New', Courier, monospace; font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #756E64; text-align: center; margin: 20px 0 0;">
            Automated message. Replies are not monitored.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
