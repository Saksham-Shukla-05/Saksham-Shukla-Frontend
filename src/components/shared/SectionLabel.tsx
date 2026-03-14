const SectionLabel = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-[10px] font-medium text-[#f56038] tracking-[3px] uppercase">
        {text}
      </span>
      <div className="w-7 h-px bg-[#f56038]/25" />
    </div>
  );
};

export default SectionLabel;
