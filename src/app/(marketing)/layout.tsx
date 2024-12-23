import { ReactNode } from "react";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobtech Synergies Ltd | Innovative Tech Solutions",
  description:
    "Explore Mobtech Synergies Ltd, a forward-thinking tech company founded by Akinyemi Akinjide Samuel revolutionizing web, game, and software development.",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
