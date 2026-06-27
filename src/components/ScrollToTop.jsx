import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "./lenis-scroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // smooth ease-out
      });
    }
  }, [pathname]);

  return null;
}
