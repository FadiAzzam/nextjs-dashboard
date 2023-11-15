import SideNav from "@/app/ui/dashboard/sidenav";
import Header from "../ui/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen">
      <Header />
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <div className="flex-auto">{children}</div>
      </div>
    </div>
  );
}
