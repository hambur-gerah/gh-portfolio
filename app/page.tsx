"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/client/Navigation";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/public/images/home/profile.png";
import featuredProject2 from "@/public/images/home/featured-project-2.jpg";
import frontEnd from "@/public/images/home/Frontend.svg";
import backEnd from "@/public/images/home/backend.svg";
import devOps from "@/public/images/home/devops.svg";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div>
      <Navigation />
      {/* INTRO */}
      <div className="bg-[#fae8c8] mt-10">
        <div className="grid grid-cols-2 gap-8 p-30">
          <div className=" col-span-1 justify-items-end ">
            <Image
              src={profileImage}
              alt="Profile"
              className="h-auto w-full max-w-125"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-8 justify-center">
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
                I enjoy turning ideas into interactive,
              </p>
              <p className="text-sm font-noto-sans-mono text-[#314b30] font-bold">
                functional, and thoughtful digital experiences.
              </p>
              <p className="text-sm font-noto-sans-mono text-[#314b30] font-bold">
                From bringing designs to life on the frontend
              </p>
              <p className="text-sm font-noto-sans-mono text-[#314b30] font-bold">
                to figuring out how things work behind the scenes.
              </p>
            </div>
            <div className="flex gap-3">
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
      {/* SELECTED WORKS */}
      <div className=" grid gap-12 p-30 bg-[#EAD9BD]">
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
              className="font-noto-sans-mono text-[#314B30] font-bold"
            >
              View all projects
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-2">
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
        <div className="grid grid-cols-3 gap-8 mt-15">
          <Card className="col-span-1 bg-[#EAD9BD]">
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <Image src={frontEnd} alt="Frontend" />
                  <span>Frontend</span>
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
    </div>
  );
}
