"use client";

import { useState, useEffect, type ReactNode } from "react";
import SplashScreen from "./SplashScreen";

export default function LoadingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <SplashScreen />}
      {children}
    </>
  );
}