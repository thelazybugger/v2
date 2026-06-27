import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export default function LenisScroll() {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
