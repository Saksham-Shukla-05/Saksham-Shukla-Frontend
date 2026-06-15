interface SectionLabelProps {
  text: string;
  index?: string;
}

const SectionLabel = ({ text, index }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      {index && (
        <span className="font-mono text-[10px] font-medium text-[#C2613C] tracking-[2.5px]">
          {index}
        </span>
      )}
      <span className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase">
        {text}
      </span>
      <div className="h-px flex-1 max-w-10 bg-[#EDE7DD]/[0.12]" />
    </div>
  );
};

export default SectionLabel;
