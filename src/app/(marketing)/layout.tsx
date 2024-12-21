import { ReactNode } from "react";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
