import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function () {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full bg-[#314B30] lg:hidden">
        <div>
          <NavigationMenu className="w-full mr-12 grid grid-cols-5">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  aria-current="page"
                  className={`${navigationMenuTriggerStyle()} group/navitem hover:bg-transparent hover:text-muted-foreground`}
                >
                  <span className="inline-block font-geist-sans">
                    Home
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 -bottom-1.5 h-0.5 origin-left scale-x-100 bg-[#D67000] transition-transform duration-300 ease-out"
                    />
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
