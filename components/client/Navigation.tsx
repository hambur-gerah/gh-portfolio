import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "@/public/images/home/logo.png";

export default function Navigation() {
  return (
    <>
      <div className="fixed top-0 z-50  flex bg-[#3e603e] w-full mx-auto p-2 text-[#F9D77E] text-md font-bold font-noto-sans-mono justify-between ">
        <div className="flex gap-4 justify-start">
          <Image src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-l font-bricolage-grotesque text-[#F9D77E] my-auto">
            gerah.dev
          </p>
        </div>
        <div className="flex gap-4 justify-end">
          <NavigationMenu className="w-full mr-12">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  aria-current="page"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="relative inline-block">
                    Home
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-100 bg-[#D67000] transition-transform duration-300 ease-out"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="relative inline-block">
                    About
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 bg-[#D67000] transition-transform duration-300 ease-out group-hover/navitem:scale-x-100"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="relative inline-block">
                    Projects
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 bg-[#D67000] transition-transform duration-300 ease-out group-hover/navitem:scale-x-100"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="relative inline-block">
                    Interests
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 bg-[#D67000] transition-transform duration-300 ease-out group-hover/navitem:scale-x-100"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="relative inline-block">
                    Travel
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-0 bg-[#D67000] transition-transform duration-300 ease-out group-hover/navitem:scale-x-100"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={`${navigationMenuTriggerStyle()} group/navitem bg-[#cb9e1b] text-[#314b30] ml-12 hover:bg-muted hover:text-muted-foreground`}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
