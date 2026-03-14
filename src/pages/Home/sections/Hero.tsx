const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center px-6 py-24">
      {/* Orbs */}
      <div className="absolute top-[-160px] right-[-100px] w-[550px] h-[550px] rounded-full bg-[#f56038] opacity-[0.13] blur-[110px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[40px] left-[5%] w-[280px] h-[280px] rounded-full bg-[#ff9060] opacity-[0.06] blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#f56038]/10 border border-[#f56038]/22 px-4 py-1.5 rounded-full mb-9">
          <div className="w-1.5 h-1.5 rounded-full bg-[#f56038] animate-pulse" />
          <span className="font-mono text-[11.5px] font-semibold text-[#f56038] tracking-[0.5px]">
            Open to work · Indore, India
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-bold text-[#eeebe5] leading-[0.94] tracking-[-3.5px] mb-8"
          style={{ fontSize: "clamp(54px, 7.5vw, 104px)" }}
        >
          Full Stack
          <br />
          <span
            className="text-[#f56038]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-2px",
            }}
          >
            Developer
          </span>{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px rgba(238,235,229,0.2)" }}
          >
            who
          </span>
          <br />
          ships.
        </h1>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-3">
          <p className="text-[15px] text-[#999] leading-[1.8] max-w-[440px] font-light">
            I'm{" "}
            <span className="text-[#eeebe5] font-medium">Saksham Shukla</span> —
            final year I-MCA at IIPS, DAVV Indore. I build{" "}
            <span className="text-[#eeebe5] font-medium">
              fast, scalable web apps
            </span>{" "}
            with the MERN stack. Currently interning at{" "}
            <span className="text-[#f56038] font-medium">OneClarity.ai</span>{" "}
            and leveling up in{" "}
            <span className="text-[#eeebe5] font-medium">
              TypeScript, Docker & AWS.
            </span>
          </p>

          {/* Stats */}
          <div className="flex gap-9">
            {[
              { num: "8+", label: "Projects" },
              { num: "350+", label: "LeetCode" },
              { num: "6mo", label: "Experience" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <div className="text-[38px] font-bold tracking-[-2px] leading-none text-[#eeebe5]">
                  {s.num.replace(/\d+/, (n) => `${n}`)}
                  <span className="text-[#f56038]">
                    {s.num.replace(/[^+mo]/g, "")}
                  </span>
                </div>
                <div className="text-[10px] text-[#555] font-mono tracking-[1.5px] uppercase mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
