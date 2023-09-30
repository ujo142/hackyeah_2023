"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideNavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const SideNavItem = ({ icon, label, href }: SideNavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname.endsWith(href);

  return (
    <li>
      <Button
        className={cn(
          "flex w-full gap-2 py-8 text-xl justify-start rounded-none hover:text-underline",
          isActive && "bg-primary text-white hover:bg-primary hover:text-white"
        )}
        variant="ghost"
        asChild
      >
        <Link href={href} className="flex text-left">
          {icon}
          <p className="hidden md:block">{label}</p>
        </Link>
      </Button>
    </li>
  );
};
