"use client";

import Image from "next/image";
import Navigation from "@/components/client/Navigation";
import Introduction from "@/components/client/Introduction";
import SelectedWorks from "@/components/client/SelectedWorks";
import { Card, CardContent } from "@/components/ui/card";
import frontEnd from "@/public/images/home/Frontend.svg";
import backEnd from "@/public/images/home/backend.svg";
import devOps from "@/public/images/home/devops.svg";
import radioFlower from "@/public/images/home/flower.svg";
import MobileNav from "@/components/client/MobileNav";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import TitleHeader from "@/components/common/TitleHeader";

export default function Home() {
  const techStack = [
    {
      title: "Frontend",
      image: frontEnd,
      stack: [
        "React/NextJS",
        "Vue.js",
        "JavaScript",
        "HTML5",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack",
      ],
    },
    {
      title: "Backend",
      image: backEnd,
      stack: [
        "NodeJS/NestJS",
        "PHP/Laravel",
        "PostgreSQL",
        "REST APIs",
        "Prisma",
        "Swagger / OpenAPI",
      ],
    },
    {
      title: "DevOps",
      image: devOps,
      stack: [
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "Bitbucket Pipelines",
        "Figma",
      ],
    },
  ];
  const navButtons = [
    {
      path: "/dashboard",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/hobbies",
      name: "Hobbies",
    },
    {
      path: "/projects",
      name: "Projects",
    },
  ];
  return (
    <div className="w-full">
      {/* INTRO */}
      <Introduction />
      {/* SELECTED WORKS */}
      <SelectedWorks />
      {/* TOOLS & TECHNOLOGIES */}
      <div className=" bg-[#fae8c8]  grid gap-7 lg:gap-12 py-12 px-5 lg:p-30">
        <TitleHeader title="CORE STACK" header="Languages & Tools" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8 ">
          {techStack.map((item) => (
            <Card key={item.title} className="col-span-1 bg-[#EAD9BD]">
              <CardContent>
                <div className="grid gap-6">
                  <div className="flex flex-row gap-4">
                    <Image src={item.image} alt="Frontend" />
                    <span className="my-auto font-noto-sans-mono font-bold text-[#314B30] text-2xl">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {item.stack.map((tool) => (
                      <div
                        key={tool}
                        className="ml-3 flex flex-row gap-2 items-center row-span-1 font-noto-sans-mono font-semibold"
                      >
                        <Image src={radioFlower} alt="Radio Flower" />
                        <span className="text-[15px]">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 bg-[#314B30] p-8 lg:p-30">
        <div className="font-bricolage-grotesque text-[48px] font-extrabold text-[#F9D77E]">
          Have something worth building?
        </div>
        <div className="flex flex-col justify-center items-center max-w-156">
          <div className=" text-white font-noto-sans-mono">
            Good ideas deserve good execution. If you have something in mind,
            let’s build it!
          </div>
        </div>
        <div>
          <Button className="bg-[#D67000] p-5 font-noto-sans-mono">
            Get In Touch
          </Button>
        </div>
      </div>
      <div className=" bg-[#314B30] p-8 lg:p-20">
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between">
          <span className="text-white font-noto-sans-mono max-w-90">
            Crafting thoughtful, accessible digital experiences from warm
            palettes and clean code.
          </span>
          <div className="grid grid-cols-2 gap-16">
            <div className="grid">
              <div className="text-[#D67000] font-bricolage-grotesque font-bold">
                NAVIGATION
              </div>

              <NavigationMenu className="w-full  ">
                <NavigationMenuList className="flex flex-col justify-start items-start gap-4 text-white font-noto-sans-mono">
                  {navButtons.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink
                        href={item.path}
                        aria-current="page"
                        className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                      >
                        <span className="relative inline-block">
                          {item.name}
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-100 bg-[#D67000] transition-transform duration-300 ease-out`}
                          />
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
              <div className="text-[#D67000] font-bricolage-grotesque font-bold">
                CONNECT
              </div>
              <NavigationMenu className="w-full ">
                <NavigationMenuList className="flex flex-col gap-4  text-white font-noto-sans-mono">
                  {navButtons.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuLink
                        href={item.path}
                        aria-current="page"
                        className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                      >
                        <span className="relative inline-block">
                          {item.name}
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-100 bg-[#D67000] transition-transform duration-300 ease-out`}
                          />
                        </span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
        <hr className="my-10 border border-[#FAF5EA]/[0.1255]" />
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
          <div className="text-[#FAF5EA] font-noto-sans-mono">
            © 2025 Gerah. Designed and built with warm palettes and forest
            energy.
          </div>
          <div className="w-fit text-white rounded-lg font-noto-sans-mono">
            User Terms & Condition | Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
