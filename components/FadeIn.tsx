"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Direction = "up" | "left" | "right";

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "animate-fade-up",
    left: "animate-fade-left",
    right: "animate-fade-right",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${visible ? directionClass : "opacity-0"} ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}