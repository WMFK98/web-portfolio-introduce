import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function useSlideAnimation(isOpen) {
  const [scope, animate] = useAnimate();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isOpen && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isOpen, hasAnimated]);

  useEffect(() => {
    const run = isOpen || hasAnimated;
    animate(
      "li",
      run
        ? { y: "0px", opacity: 1, scale: 1, filter: "blur(0px)" }
        : { y: "100px", opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: run ? stagger(0.05, { startDelay: 0.05 }) : 0,
      },
    );
  }, [isOpen, hasAnimated]);

  return scope;
}
