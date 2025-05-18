import {
  ChevronDownIcon,
  FigmaIcon,
  InstagramIcon,
  MoonIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavbarByAnima = (): JSX.Element => {
  const navItems = [
    { name: "nft", isGradient: true },
    { name: "about" },
    { name: "work" },
    { name: "story" },
    { name: "timeline" },
  ];

  const socialIcons = [
    { icon: <FigmaIcon className="w-4 h-4" />, alt: "Figma" },
    { icon: <TwitterIcon className="w-4 h-4" />, alt: "Twitter" },
    { icon: <InstagramIcon className="w-4 h-4" />, alt: "Instagram" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 mx-auto bg-dark-nav-bg rounded-xl backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] max-w-[708px]">
      <div className="flex items-center gap-2">
        <img
          className="w-[70px] h-5"
          alt="Logo realvjy"
          src="/logo-realvjy.svg"
        />

        <NavigationMenu className="px-3">
          <NavigationMenuList className="flex items-start gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`${
                    item.isGradient
                      ? "[background:linear-gradient(90deg,rgba(240,104,68,1)_0%,rgba(238,76,84,1)_25%,rgba(212,94,149,1)_50%,rgba(156,108,166,1)_75%,rgba(101,131,193,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-16-16-bold font-bold"
                      : "text-basic-white font-16-16-med"
                  } text-[length:var(--16-16-med-font-size)] tracking-[var(--16-16-med-letter-spacing)] leading-[var(--16-16-med-line-height)]`}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-basic-white font-16-16-med text-[length:var(--16-16-med-font-size)] tracking-[var(--16-16-med-letter-spacing)] leading-[var(--16-16-med-line-height)]">
                  more
                  <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Contact</DropdownMenuItem>
                  <DropdownMenuItem>Projects</DropdownMenuItem>
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-6 px-3 py-0.5 border-r border-[#ffffff0d]">
          {socialIcons.map((social, index) => (
            <button key={index} aria-label={social.alt}>
              {social.icon}
            </button>
          ))}
        </div>

        <button aria-label="Toggle theme">
          <MoonIcon className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
