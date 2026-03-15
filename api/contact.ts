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
      subject: `New message from ${name} — sakshamshukla.in`,
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
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f0ede8; padding: 40px; border-radius: 12px;">
          
          <h2 style="color: #f56038; margin-bottom: 8px;">Hey ${name}! 👋</h2>
          <p style="color: #c0bdb8; line-height: 1.8; margin-bottom: 16px;">
            Thanks for reaching out — I've received your message and will get back to you as soon as possible, usually within 24–48 hours.
          </p>

          <div style="background: #161616; border: 1px solid #222; border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="color: #888; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 2px;">Your message</p>
            <p style="color: #f0ede8; line-height: 1.7;">${message}</p>
          </div>

          <p style="color: #c0bdb8; line-height: 1.8;">
            In the meantime, feel free to check out my work at 
            <a href="https://sakshamshukla.in" style="color: #f56038;">sakshamshukla.in</a> 
            or connect with me on 
            <a href="https://www.linkedin.com/in/saksham-shukla-9758602a6" style="color: #f56038;">LinkedIn</a>.
          </p>

          <hr style="border: none; border-top: 1px solid #222; margin: 32px 0;"/>
          
          <p style="color: #f56038; font-size: 14px; font-weight: 600;">Saksham Shukla</p>
          <p style="color: #555; font-size: 12px;">Full Stack Developer · sakshamshukla.in</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
