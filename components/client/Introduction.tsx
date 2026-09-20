import Image from "next/image";
import { Button } from "@/components/ui/button";
import profileImage from "@/public/images/home/profile.png";
import mobileImage from "@/public/images/home/hero-portrait.png";

export default function Introduction() {
  return (
    <>
      <div className="bg-[#fae8c8] p-5 lg:p-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className=" col-span-1 justify-items-center w-auto h-auto lg:justify-items-end ">
            <Image
              src={profileImage}
              alt="Profile"
              className="h-auto w-full max-w-125 hidden lg:block"
            />
            <Image
              src={mobileImage}
              alt="Mobile Profile"
              className="h-auto w-full block lg:hidden"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 lg:gap-8 justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bricolage-grotesque font-bold text-[#314b30]">
                Hi!
              </p>
              <h1 className="text-4xl font-bricolage-grotesque font-bold text-[#d67000] border-b-3 border-[#dd7601] w-fit h-fit">
                I'm Gerah [jè rá]
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-noto-sans-mono text-[#314b30] font-bold">
                I enjoy turning ideas into interactive, functional, and
                thoughtful digital experiences. From bringing designs to life on
                the frontend to figuring out how things work behind the scenes.
              </p>
            </div>
            <div className="grid grid-rows-2 lg:grid-cols-2 gap-3">
              <Button className="bg-[#314B30] text-[#F9D77E] font-noto-sans-mono px-6 hover:bg-muted hover:text-muted-foreground">
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-[#314B30] text-[#314B30]font-noto-sans-mono hover:bg-muted hover:text-muted-foreground hover:border-muted-foreground"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
