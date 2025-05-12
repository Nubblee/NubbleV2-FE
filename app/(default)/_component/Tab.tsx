"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface TabProps {
  tabItems: TabItems[];
  className?: string;
}

interface TabItems {
  name: string;
  link: string;
}

const Tab = ({ tabItems, className }: TabProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({
    transformX: 0,
    width: 0,
  });

  useEffect(() => {
    const currentIndex = tabItems.findIndex((tab) => pathname === tab.link);
    if (containerRef.current && currentIndex !== -1) {
      const tabElement = containerRef.current.children[
        currentIndex
      ] as HTMLElement;
      setUnderlineStyle({
        transformX: tabElement.offsetLeft,
        width: tabElement.offsetWidth,
      });
    }
  }, [pathname, tabItems]);

  return (
    <div className={`relative ${className}`}>
      <div
        className="flex gap-10 font-semibold text-xl text-gray-middle"
        ref={containerRef}
      >
        {tabItems.map((tab) => (
          <Link
            key={tab.link}
            href={tab.link}
            className={`pb-2 ${
              pathname === tab.link ? "text-green-middle" : "text-gray-middle"
            } transition-colors `}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div
        className="absolute bottom-0 h-[2px] bg-green-middle transition-all duration-300"
        style={{
          transform: `translateX(${underlineStyle.transformX}px)`,
          width: underlineStyle.width,
          transition: "transform 0.3s ease, width 0.3s ease",
        }}
      />
    </div>
  );
};

export default Tab;
