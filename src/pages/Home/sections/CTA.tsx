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
    // API call will be wired later
    console.log("Form data:", data);
    await new Promise((r) => setTimeout(r, 1000)); // simulate delay
    setSent(true);
    reset();
    setLoading(false);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="px-6 py-24 relative overflow-hidden border-t border-white/[0.06]">
      {/* Orb */}
      <div className="absolute w-[700px] h-[700px] bg-[#f56038] rounded-full blur-[140px] opacity-[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-[10px] text-[#f56038] tracking-[3px] uppercase mb-4">
            contact
          </p>
          <h2
            className="font-bold text-[#eeebe5] tracking-[-2.5px] leading-[0.96] mb-5"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            Let's build
            <br />
            something{" "}
            <span
              className="text-[#f56038]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              great.
            </span>
          </h2>
          <p className="text-[14.5px] text-[#999] leading-[1.75] font-light max-w-[400px] mx-auto">
            Open to full-time roles, internships, and freelance projects. Drop
            me a message and I'll get back to you.
          </p>
        </div>

        {/* Grid — form + info */}
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[11px] font-mono text-[#f56038] tracking-[2px] uppercase mb-4">
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
                    href: "https://www.linkedin.com/in/saksham-shukla-9758602a6",
                    value: "saksham-shukla",
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
                    className="flex items-center justify-between px-4 py-3 bg-[#111] border border-white/[0.06] rounded-[11px] hover:border-[#f56038]/30 hover:bg-[#f56038]/5 transition-all duration-200 group"
                  >
                    <p className="text-[12px] flex gap-2 font-semibold text-[#bebcbc] group-hover:text-[#f56038] transition-colors">
                      {l.icon}
                      {l.label}
                    </p>
                    <span className="text-[11px] text-[#444] font-mono group-hover:text-[#c0bdb8] transition-colors">
                      {l.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#111] border border-white/[0.06] rounded-[14px] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
                <span className="text-[12px] font-semibold text-[#4ade80]">
                  Available for work
                </span>
              </div>
              <p className="text-[12px] text-[#bebcbc] leading-[1.6]">
                Currently open to full-time roles, internships, and freelance
                projects.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#111] border border-white/[0.06] rounded-[18px] p-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block text-[11px] font-mono text-[#bebcbc] tracking-[1.5px] uppercase mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="w-full bg-[#0d0d0d] border border-white/[0.08] rounded-[10px] px-4 py-3 text-[13.5px] text-[#eeebe5] placeholder:text-[#333] outline-none focus:border-[#f56038]/50 focus:ring-1 focus:ring-[#f56038]/20 transition-all duration-200"
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1.5">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-mono text-[#bebcbc] tracking-[1.5px] uppercase mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="your@email.com"
                  className="w-full bg-[#0d0d0d] border border-white/[0.08] rounded-[10px] px-4 py-3 text-[13.5px] text-[#eeebe5] placeholder:text-[#333] outline-none focus:border-[#f56038]/50 focus:ring-1 focus:ring-[#f56038]/20 transition-all duration-200"
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1.5">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-mono text-[#bebcbc] tracking-[1.5px] uppercase mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Tell me about your project, role, or just say hi..."
                  rows={5}
                  className="w-full bg-[#0d0d0d] border border-white/[0.08] rounded-[10px] px-4 py-3 text-[13.5px] text-[#eeebe5] placeholder:text-[#333] outline-none focus:border-[#f56038]/50 focus:ring-1 focus:ring-[#f56038]/20 transition-all duration-200 resize-none"
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
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-[11px] text-[13.5px] font-semibold transition-all duration-200 ${
                  sent
                    ? "bg-[#4ade80]/20 text-[#4ade80] border border-[#4ade80]/30 cursor-default"
                    : "bg-[#f56038] text-white hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(245,96,56,0.28)] disabled:opacity-60 disabled:cursor-not-allowed"
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
