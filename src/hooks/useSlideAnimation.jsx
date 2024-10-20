import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
const staggerMenuItems = stagger(0.05, { startDelay: 0.05 });

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
      "ul",
      {
        clipPath: run
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      },
    );

    animate(
      "li",
      run
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: run ? staggerMenuItems : 0,
      },
    );
  }, [isOpen]);

  return scope;
}
