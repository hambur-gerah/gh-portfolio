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

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      {/* INTRO */}
      <Introduction />
      {/* SELECTED WORKS */}
      <SelectedWorks />
      {/* TOOLS & TECHNOLOGIES */}
      <div className=" bg-[#fae8c8] p-5 lg:p-30">
        <div className="grid gap-2">
          <div className="text-md  font-noto-sans-mono font-bold text-[#D67000] ">
            Core Stack
          </div>
          <div className="text-[38px] font-noto-sans-mono font-bold text-[#314B30] ">
            Languages & Tools
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
