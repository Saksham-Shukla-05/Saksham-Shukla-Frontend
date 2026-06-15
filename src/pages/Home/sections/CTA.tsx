import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Github, Linkedin, Loader2, Mail } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const CTA = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSent(true);
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setSent(false), 4000);
    }
  };

  return (
    <section className="px-6 py-24 border-t border-[#EDE7DD]/6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-[10px] font-medium text-[#C2613C] tracking-[2.5px]">
              03
            </span>
            <span className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase">
              contact
            </span>
          </div>
          <h2
            className="leading-none mb-5"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            Let's build
            <br />
            something <span className="italic text-[#C2613C]">great.</span>
          </h2>
          <p className="text-[14.5px] text-[#AFA89D] leading-[1.75] font-light max-w-[400px] mx-auto">
            Open to full-time roles, internships, and freelance projects. Drop
            me a message and I'll get back to you.
          </p>
        </div>

        {/* Grid — form + info */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-15 md:gap-24 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-4">
                Reach out directly
              </p>
              <div className="flex flex-col gap-3">
                {[
                  {
                    label: "Email",
                    icon: <Mail className="w-4 h-4" />,
                    href: "mailto:shuklasaksham729@gmail.com",
                    value: "shuklasaksham729@gmail.com",
                  },
                  {
                    label: "LinkedIn",
                    icon: <Linkedin className="w-4 h-4" />,
                    href: "https://www.linkedin.com/in/sakshamshukla-dev/",
                    value: "sakshamshukla-dev",
                  },
                  {
                    label: "GitHub",
                    icon: <Github className="w-4 h-4" />,
                    href: "https://github.com/Saksham-Shukla-05",
                    value: "Saksham-Shukla-05",
                  },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between px-4 py-3 bg-[#28251F] border border-[#EDE7DD]/6 rounded-xl hover:border-[#EDE7DD]/16 transition-all duration-200 group"
                  >
                    <p className="text-[12px] flex gap-2 font-semibold text-[#AFA89D] group-hover:text-[#EDE7DD] transition-colors">
                      {l.icon}
                      {l.label}
                    </p>
                    <span className="text-[11px] text-[#756E64] font-mono group-hover:text-[#AFA89D] transition-colors">
                      {l.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 bg-[#7C8F65]" />
                <span className="font-mono text-[10px] font-medium text-[#7C8F65] tracking-[2.5px] uppercase">
                  Available for work
                </span>
              </div>
              <p className="text-[12px] text-[#AFA89D] leading-[1.6]">
                Currently open to full-time roles, internships, and freelance
                projects.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full bg-[#1F1D1B] border border-[#EDE7DD]/8 rounded-xl px-4 py-3 text-[13.5px] text-[#EDE7DD] placeholder:text-[#756E64] outline-none focus:border-[#C2613C]/40 focus:ring-1 focus:ring-[#C2613C]/20 transition-all duration-200"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1.5">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="your@email.com"
                  className="w-full bg-[#1F1D1B] border border-[#EDE7DD]/8 rounded-xl px-4 py-3 text-[13.5px] text-[#EDE7DD] placeholder:text-[#756E64] outline-none focus:border-[#C2613C]/40 focus:ring-1 focus:ring-[#C2613C]/20 transition-all duration-200"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Tell me about your project, role, or just say hi..."
                  rows={5}
                  className="w-full bg-[#1F1D1B] border border-[#EDE7DD]/8 rounded-xl px-4 py-3 text-[13.5px] text-[#EDE7DD] placeholder:text-[#756E64] outline-none focus:border-[#C2613C]/40 focus:ring-1 focus:ring-[#C2613C]/20 transition-all duration-200 resize-none"
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || sent}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13.5px] font-semibold transition-all duration-200 ${
                  sent
                    ? "bg-[#7C8F65]/15 text-[#7C8F65] border border-[#7C8F65]/25 cursor-default"
                    : "bg-[#C2613C] text-[#1F1D1B] hover:bg-[#CC6E49] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending...
                  </>
                ) : sent ? (
                  "✓ Message sent!"
                ) : (
                  "Send Message →"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
