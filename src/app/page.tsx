import Image from "next/image";
import { AnimatedBackground } from "./pages/animatedBackground";
import { NavBar } from "./pages/navBar";

export default function Home() {
  return (
    <main>
      <NavBar/>
     <AnimatedBackground/>
     <AnimatedBackground/>
      
    </main>
  );
}
