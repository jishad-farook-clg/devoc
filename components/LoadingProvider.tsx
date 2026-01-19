// components/LoadingProvider.tsx
"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleLoad = () => {
      setIsLoading(false);
    };

    // 1. Check if browser has already finished loading (for fast connections/refresh)
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      // 2. Wait for the actual "load" event (includes images & scripts)
      window.addEventListener("load", handleLoad);
    }

    // 3. Safety Net: Force close after 10 seconds in case a resource hangs
    const safetyTimeout = setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 10000); 

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(safetyTimeout);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" />}
      </AnimatePresence>
      {children}
    </>
  );
}