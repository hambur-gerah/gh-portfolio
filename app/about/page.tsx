import Image from "next/image";
import aboutMe from "@/public/images/about/aboutme.png";
import TitleHeader from "@/components/common/TitleHeader";
export default function About() {
  return (
    <div>
      <div className="bg-[#fae8c8] p-5 lg:p-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0">
          <div className="flex flex-col  gap-6">
            <TitleHeader
              title="THE STORY"
              header="Turning ideas into digital experiences"
            />
            <p className="text-sm font-noto-sans-mono text-[#314b30] ">
              I’m a web developer focused on creating modern, functional, and
              thoughtful digital experiences. I work primarily with React,
              TypeScript, and Tailwind, with a particular interest in turning
              complex ideas into interfaces that feel simple and inviting.
            </p>
            <p className="text-sm font-noto-sans-mono text-[#314b30] ">
              When I’m not coding, you’ll usually find me underwater, or
              exploring somewhere new things that keep me curious and often
              inspire the way I design and build.
            </p>
          </div>
          <div className="flex justify-end items-end">
            <Image
              src={aboutMe}
              alt="About Me"
              className="rounded-[24px] border-2 border-[#314B30]"
            />
          </div>
        </div>
      </div>
      {/* WORK & EDUCATION */}
      <div className="bg-[#EAD9BD] p-5 lg:p-30">
        <TitleHeader title="EVOLUTION" header="Work & Education Journey" />
      </div>
    </div>
  );
}
