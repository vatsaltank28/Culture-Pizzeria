import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-1 pt-[72px] md:pt-[84px]">{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
