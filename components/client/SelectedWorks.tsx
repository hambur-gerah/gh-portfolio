import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import featuredProject2 from "@/public/images/home/featured-project-2.jpg";

export default function SelectedWorks() {
  const stack = ["React", "NextJS", "Tailwind CSS", "Prisma", "Neon"];
  return (
    <>
      <div className=" grid gap-7 lg:gap-12 py-12 px-5 lg:p-30 bg-[#EAD9BD]">
        <div className="grid gap-2">
          <div className="text-md  font-noto-sans-mono font-bold text-[#D67000] ">
            Crafted with Intent
          </div>
          <div className="flex justify-between">
            <div className="text-[38px] font-noto-sans-mono font-bold text-[#314B30] ">
              Selected Works
            </div>
            <Button
              variant="ghost"
              className="font-noto-sans-mono text-[#314B30] font-bold sm:hidden hidden lg:block"
            >
              View all projects
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row ">
          <div className="max-w-87.5 lg:max-w-146">
            <Card className="p-0 w-full ">
              <CardContent className="p-0 grid w-full bg-[#F5E6C8]">
                <div className="max-h-45 lg:max-h-65">
                  <Image
                    src={featuredProject2}
                    alt="Profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-5 p-7 text-[#314B30] max-w-87.5 lg:max-w-146">
                  <span className="font-bricolage-grotesque text-2xl font-bold">
                    ChopPinList
                  </span>
                  <p>
                    a web application designed to help users organize and manage
                    their lists in a simple and intuitive way. Built as a
                    hands-on project, it focuses on creating a smooth user
                    experience while exploring modern web development practices
                    and technologies.
                  </p>
                  <div className="flex flex-row flex-wrap  gap-2 font-jet-brains-mono text-xs">
                    {stack.map((item) => (
                      <Badge
                        key={item}
                        className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] "
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-87.5 lg:max-w-146">
            <Card className="p-0 w-full ">
              <CardContent className="p-0 grid w-full bg-[#F5E6C8]">
                <div className="max-h-45 lg:max-h-65">
                  <Image
                    src={featuredProject2}
                    alt="Profile"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-5 p-7 text-[#314B30] max-w-87.5 lg:max-w-146">
                  <span className="font-bricolage-grotesque text-2xl font-bold">
                    ChopPinList
                  </span>
                  <p>
                    a web application designed to help users organize and manage
                    their lists in a simple and intuitive way. Built as a
                    hands-on project, it focuses on creating a smooth user
                    experience while exploring modern web development practices
                    and technologies.
                  </p>
                  <div className="flex flex-row flex-wrap  gap-2 font-jet-brains-mono text-xs">
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      React
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Next.js
                    </Badge>
                    <Badge className=" rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Tailwind CSS
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Prisma
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Neon
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className=" flex lg:hidden justify-center items-center">
          <Button
            variant="ghost"
            className="font-noto-sans-mono text-[#314B30] font-bold"
          >
            View all projects
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
