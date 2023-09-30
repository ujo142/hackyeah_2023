import { BookMarked, Building2, Globe } from "lucide-react";
import { SideNavItem } from "./SideNavItem";

export const SideNav = () => {
  return (
    <aside className=" min-h-screen border-r border-border w-64">
      <ul>
        <SideNavItem
          label="Wyszukiwarka"
          icon={<Globe />}
          href="/smart-browser"
        />
        <SideNavItem
          label="Miejsca"
          icon={<Building2 />}
          href="/place-checker"
        />
        <SideNavItem label="Rezerwacja" icon={<BookMarked />} href="/booker" />
      </ul>
    </aside>
  );
};
