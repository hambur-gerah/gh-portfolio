"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import home from "@/public/images/navmobile/home.png";
import user from "@/public/images/navmobile/user.png";
import folder from "@/public/images/navmobile/folder.png";
import book from "@/public/images/navmobile/book.png";
import mail from "@/public/images/navmobile/mail.png";
import activeHome from "@/public/images/navmobile/active-home.png";
import activeUser from "@/public/images/navmobile/active-user.png";
import activeFolder from "@/public/images/navmobile/active-folder.png";
import activeBook from "@/public/images/navmobile/active-book.png";
import activeMail from "@/public/images/navmobile/active-mail.png";
import { usePathname } from "next/navigation";

export default function () {
  const navButtons = [
    {
      path: "/dashboard",
      name: "Home",
      navIcon: home,
      activeIcon: activeHome,
    },
    { path: "/about", name: "About", navIcon: user, activeIcon: activeUser },
    {
      path: "/projects",
      name: "Projects",
      navIcon: folder,
      activeIcon: activeFolder,
    },
    {
      path: "/hobbies",
      name: "Hobbies",
      navIcon: book,
      activeIcon: activeBook,
    },
    {
      path: "/contact",
      name: "Contact",
      navIcon: mail,
      activeIcon: activeMail,
    },
  ];
  const path = usePathname();
  return (
    <>
      <div className="sticky bottom-0 left-0 z-50 w-full bg-[#314B30] lg:hidden">
        <NavigationMenu className="w-full max-w-auto">
          <NavigationMenuList className="flex flex-row gap-1 py-1 ">
            {navButtons.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink
                  href={item.path}
                  aria-current="page"
                  className="group/navitem hover:bg-transparent hover:text-muted-foreground m-0 p-2"
                >
                  <div className="flex flex-col justify-center items-center gap-1">
                    <Image
                      src={path == item.path ? item.activeIcon : item.navIcon}
                      alt={`${item}`}
                    />
                    <span className="m-0 font-geist-sans text-[#FAF5EA]">
                      {item.name}
                    </span>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
