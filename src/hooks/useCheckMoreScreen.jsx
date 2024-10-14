import React, { useEffect, useState } from "react";

export default function useCheckMoreScreen(screen) {
  const [isMore, setIsMore] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => setIsMore(window.innerWidth >= screen);
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return isMore;
}
