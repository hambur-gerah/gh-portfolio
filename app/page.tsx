"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/client/Navigation";
import Introduction from "@/components/client/Introduction";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import featuredProject2 from "@/public/images/home/featured-project-2.jpg";
import frontEnd from "@/public/images/home/Frontend.svg";
import backEnd from "@/public/images/home/backend.svg";
import devOps from "@/public/images/home/devops.svg";
import radioFlower from "@/public/images/home/flower.svg";
import { Badge } from "@/components/ui/badge";
import MobileNav from "@/components/client/MobileNav";

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      {/* INTRO */}
      <Introduction />
      {/* SELECTED WORKS */}
      <div className=" grid gap-12 lg:p-30 bg-[#EAD9BD]">
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
              className="font-noto-sans-mono text-[#314B30] font-bold sm:hidden"
            >
              View all projects
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="grid gap-8 grid-col-1 lg:grid-cols-2 ">
          <div className="cols-span-1">
            <Card className="p-0">
              <CardContent className="p-0 grid bg-[#F5E6C8]">
                <Image
                  src={featuredProject2}
                  alt="Profile"
                  className="w-full h-auto"
                />
                <div className="flex flex-col gap-5 p-7 text-[#314B30]">
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
                  <div className="flex flex-row gap-2 font-jet-brains-mono text-xs ">
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      React
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Next.js
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Tailwind CSS
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Typescript
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
          <div className="cols-span-1">
            <Card className="p-0">
              <CardContent className="p-0 grid bg-[#F5E6C8]">
                <Image
                  src={featuredProject2}
                  alt="Profile"
                  className="w-full h-auto"
                />
                <div className="flex flex-col gap-5 p-7 text-[#314B30]">
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
                  <div className="flex flex-row gap-2 font-jet-brains-mono text-xs ">
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      React
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Next.js
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Tailwind CSS
                    </Badge>
                    <Badge className="rounded-sm px-2.5 py-3 text-[#314B30] bg-[#EAD9BD] ">
                      Typescript
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
      </div>
      {/* TOOLS & TECHNOLOGIES */}
      <div className=" bg-[#fae8c8] p-30">
        <div className="grid gap-2">
          <div className="text-md  font-noto-sans-mono font-bold text-[#D67000] ">
            Languages & Tools
          </div>
          <div className="text-[38px] font-noto-sans-mono font-bold text-[#314B30] ">
            The Core Arsenal
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
          <Card className="col-span-1 bg-[#EAD9BD]">
            <CardContent>
              <div className="grid grid-rows-4 gap-6">
                <div className="row-span-1 flex flex-row gap-4">
                  <Image src={frontEnd} alt="Frontend" />
                  <span className="my-auto font-noto-sans-mono font-bold text-[#314B30] text-2xl">
                    Frontend
                  </span>
                </div>
                <div className=" row-span-4">
                  <div className="flex flex-row gap-2 items-center row-span-1 font-noto-sans-mono font-medium  ">
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>React/NextJS</span>
                  </div>
                  <div>
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>TypeScript</span>
                  </div>
                  <div>
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>Tailwind</span>
                  </div>
                  <div>
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>Vue/NestJS</span>
                  </div>
                  <div>
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>TanStack</span>
                  </div>
                  <div>
                    <Image src={radioFlower} alt="Radio Flower" />
                    <span>Shadcn UI</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-[#EAD9BD]">
            <CardContent>
              <div>
                <Image src={backEnd} alt="Backend" />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 bg-[#EAD9BD]">
            <CardContent>
              <div>
                <Image src={devOps} alt="DevOps" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
