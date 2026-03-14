const CTA = () => {
  return (
    <section className="px-6 py-28 text-center relative overflow-hidden">
      {/* Orb */}
      <div className="absolute w-[600px] h-[600px] bg-[#f56038] rounded-full blur-[140px] opacity-[0.07] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2
          className="font-bold text-[#eeebe5] tracking-[-2.5px] leading-[0.96] mb-5"
          style={{ fontSize: "clamp(42px, 6vw, 76px)" }}
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
        <p className="text-[14.5px] text-[#999] leading-[1.75] mb-11 font-light max-w-[360px] mx-auto">
          Open to full-time roles, internships, and freelance projects. If you
          need a MERN dev who actually ships — let's talk.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="mailto:shuklasaksham729@gmail.com"
            className="inline-flex items-center gap-2 bg-[#f56038] text-white px-7 py-3.5 rounded-[11px] text-[13.5px] font-semibold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(245,96,56,0.28)] transition-all duration-200"
          >
            ✉ shuklasaksham729@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/saksham-shukla-9758602a6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/[0.11] text-[#999] px-6 py-3.5 rounded-[11px] text-[13.5px] font-semibold hover:text-[#eeebe5] hover:bg-white/[0.04] transition-all duration-200"
          >
            ↗ LinkedIn
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/[0.11] text-[#999] px-6 py-3.5 rounded-[11px] text-[13.5px] font-semibold hover:text-[#eeebe5] hover:bg-white/[0.04] transition-all duration-200"
          >
            ⬇ Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
