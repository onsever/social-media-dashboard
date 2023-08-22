import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  React.useEffect(() => {
    document.title = "Home / X";
  }, []);

  return (
    <div className="grid grid-cols-[1.2fr,3fr,1.8fr] gap-4 w-[1240px] h-screen m-auto">
      <Header />
      <main className="border border-gray-300 border-t-0">{children}</main>
      <Sidebar />
    </div>
  );
}
