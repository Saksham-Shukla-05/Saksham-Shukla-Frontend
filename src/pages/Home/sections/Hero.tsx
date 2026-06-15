import { motion } from "framer-motion";

const stats = [
  { num: "8", suffix: "+", label: "Projects" },
  { num: "450", suffix: "+", label: "LeetCode" },
  { num: "10", suffix: " mo", label: "Experience" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center px-6 py-24">
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Status line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-9"
          >
            <span className="w-2 h-2 bg-[#C2613C]" />
            <span className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase">
              Open to work · full stack roles & freelance
            </span>
          </motion.div>

          {/* Title — staggered lines */}
          <div className="mb-8">
            {["Full Stack", "Engineer who", "ships."].map((line, i) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <h1
                  className="leading-none"
                  style={{ fontSize: "clamp(48px, 6.5vw, 96px)" }}
                >
                  {i === 1 ? (
                    <>
                      <span className="text-[#C2613C] italic">Engineer</span>{" "}
                      who
                    </>
                  ) : (
                    line
                  )}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[15px] text-[#AFA89D] leading-[1.8] max-w-110 font-light mt-3"
          >
            I'm{" "}
            <span className="text-[#EDE7DD] font-medium">Saksham Shukla</span>,
            I build{" "}
            <span className="text-[#EDE7DD] font-medium">
              fast, scalable web apps
            </span>{" "}
            with the MERN stack. Currently interning at{" "}
            <span className="text-[#C2613C] font-medium">OneClarity.ai</span>{" "}
            and leveling up in{" "}
            <span className="text-[#EDE7DD] font-medium">Python & AWS.</span>
          </motion.p>
        </div>

        {/* Stats — by the numbers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col-reverse lg:flex-col gap-8 lg:gap-10 w-full lg:w-65 shrink-0 border-t-2 lg:border-t-0 lg:border-l-2 border-[#C2613C] pt-8 lg:pt-0 lg:pl-8"
        >
          <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-3 lg:gap-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="text-[32px] lg:text-[44px] font-bold tracking-[-2px] leading-none">
                  <span className="text-[#EDE7DD]">{s.num}</span>
                  <span className="text-[#756E64]">{s.suffix}</span>
                </div>
                <div className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mt-1.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="font-['Playfair_Display'] italic text-[17px] leading-normal text-[#C2613C] lg:pt-6 lg:border-t lg:border-[#EDE7DD]/6">
            "The gap between knowing and building is where experience lives."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
