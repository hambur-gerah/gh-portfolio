export default function TitleHeader({
  title,
  header,
}: {
  title: string;
  header: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[14px] font-noto-sans-mono font-bold text-[#D67000]">
        {title}
      </p>
      <h1 className="text-[36px] font-bricolage-grotesque font-bold text-[#314B30] w-fit h-fit">
        {header}
      </h1>
    </div>
  );
}
