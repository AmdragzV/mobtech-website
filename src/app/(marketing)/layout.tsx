import { ReactNode } from "react";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
