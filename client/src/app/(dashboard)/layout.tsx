import { Header } from "@/components/Header";
import { SideNav } from "@/components/Sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <div className="min-h-screen w-full flex">
        <SideNav />
        <section className="flex w-full h-full justify-center items-center m-14">
          {children}
        </section>
      </div>
    </main>
  );
}
