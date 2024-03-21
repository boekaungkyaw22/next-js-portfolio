import Image from "next/image";
import { AnimatedBackground } from "./pages/animatedBackground";
import { NavBar } from "./pages/navBar";
import { StickyScrollRevealDemo } from "./pages/stickyScrollReveal";
import { TracingBeamDemo } from "./pages/tracingBeam";

export default function Home() {
  return (
    <main>
      <NavBar/>
     <AnimatedBackground/>
     <StickyScrollRevealDemo/>
     <TracingBeamDemo/>
    </main>
  );
}
