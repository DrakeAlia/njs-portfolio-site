"use client";

import type { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { MainNavItem } from "@/app/types/site";
import { ThemeToggle } from "./theme-toggle";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface MainNavProps {
  items?: MainNavItem[];
}
const MainNav: FC<MainNavProps> = ({ items }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden h-20 items-center justify-between md:flex">
        <Link
          aria-label="Home"
          href="/"
          className="hidden items-center space-x-2 md:flex"
        >
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatar.png" alt="drakealia" />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
        </Link>

        <div className="flex items-center gap-6">
          {items?.map((item) => (
            <MenuLink
              pathname={pathname}
              key={item.title}
              href={item.href!}
              className="text-lg font-medium"
            >
              {item.title}
            </MenuLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default MainNav;
interface MenuLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  pathname: string;
  className?: string;
}

function MenuLink({
  children,
  href,
  disabled,
  pathname,
  className,
}: MenuLinkProps) {
  return (
    <Link
      href={`${href}`}
      className={cn(
        "text-foreground transition-colors hover:text-primary/90",
        pathname === href && "text-primary",
        disabled && "pointer-events-none opacity-60",
        className
      )}
    >
      {children}
    </Link>
  );
}
