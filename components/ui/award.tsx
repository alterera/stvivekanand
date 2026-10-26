"use client";

import type React from "react";
import { Award, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AwardsComponentProps {
  variant?: "stamp" | "award" | "certificate" | "badge" | "sticker" | "id-card";
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
  recipient?: string;
  level?: "bronze" | "silver" | "gold" | "platinum";
  className?: string;
  showIcon?: boolean;
  customIcon?: React.ReactNode;
}

const levelColors = {
  bronze: "from-amber-600 to-amber-800",
  silver: "from-gray-400 to-gray-600",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-slate-300 to-slate-500",
};

export function Awards({
  variant = "badge",
  title,
  subtitle,
  date,
  recipient,
  level = "gold",
  className,
  showIcon = true,
}: AwardsComponentProps) {
  if (variant === "stamp") {
    const createSerratedPath = () => {
      const radius = 96;
      const teeth = 40;
      const innerRadius = radius - 8;
      const outerRadius = radius;
      let path = "";
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * 2 * Math.PI;
        const r = i % 2 === 0 ? outerRadius : innerRadius;
        const x = Math.cos(angle) * r + radius;
        const y = Math.sin(angle) * r + radius;
        if (i === 0) path += `M ${x} ${y}`;
        else path += ` L ${x} ${y}`;
      }
      path += " Z";
      return path;
    };

    const createTextPath = (radius: number) => {
      const centerX = 96;
      const centerY = 96;
      return `M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`;
    };

    return (
      <div className={cn("relative mx-auto flex h-48 w-48 items-center justify-center", className)}>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="top-curve" d={createTextPath(55)} fill="none" />
            <path
              id="bottom-curve"
              d={createTextPath(60)}
              fill="none"
              transform="rotate(180 96 96)"
            />
          </defs>
          <path
            d={createSerratedPath()}
            strokeWidth="0.2"
            className="fill-[#fff9f5] stroke-[#85193C]"
          />
          <circle
            cx="96"
            cy="96"
            r="78"
            className="fill-[#fff9f5] stroke-[#85193C]"
            strokeWidth="0.2"
          />
          {subtitle && (
            <text className="text-xl font-bold">
              <textPath
                href="#top-curve"
                startOffset="50%"
                textAnchor="middle"
                className="fill-[#1D3557]"
              >
                {subtitle}
              </textPath>
            </text>
          )}
          <text className="text-[10px] tracking-wider">
            <textPath
              href="#bottom-curve"
              startOffset="50%"
              textAnchor="middle"
              className="fill-[#85193C]"
            >
              {title}
            </textPath>
          </text>
        </svg>
        <div className="relative z-10 text-center">
          {showIcon && (
            <div className="mb-1 flex justify-center text-2xl">
              <Star className="h-8 w-8 fill-[#85193C] text-[#85193C]" />
            </div>
          )}
          {recipient && <div className="mt-2 text-sm font-semibold text-[#1D3557]">{recipient}</div>}
          {date && <div className="text-[10px] italic text-gray-600">{date}</div>}
        </div>
      </div>
    );
  }

  if (variant === "badge") {
    const Badge = () => (
      <svg
        className="h-full w-16 shrink-0 overflow-hidden fill-[#85193C]"
        viewBox="0 0 500.15 620.78"
        aria-hidden="true"
      >
        <path d="M453.85,385.1c16.99-26.81,1.62-58.47,18.76-87.24,12.03-20.19,29.82-36.18,27.29-62.46-2.84-29.52-33.04-48.63-35.87-75.13-2.33-21.77,2.23-43.54-9.49-63.51-17.52-29.86-57.27-24.53-79.03-47.97-14.71-15.84-24.1-37.76-46.27-45.73-31.05-11.17-56.45,12.73-85.44,9.44-22.25-2.52-42.24-16.43-65.98-11.43-26.93,5.68-36.44,28.9-52.83,47.17-18.28,20.39-48.97,19.08-69.44,36.56-23.39,19.97-16.36,46.88-19.55,73.45-3.37,28.13-28.95,43.88-34.69,70.31-8.97,41.31,30.51,58.13,34.69,93.72,2.55,21.68-2.27,42.21,9.85,62.15,13.67,22.49,41.07,24.3,62.09,35.93l-65.92,141.39,90.99-30,33.5,89,71.4-151.37c7.8-2.36,16.43-2.29,24.22-.03l69.89,151.41,35-89.01,90.98,30-65.92-141.4c20.6-11.4,47.98-13.54,61.74-35.28ZM431.43,373.69c-11.35,14.21-47.72,18.54-65.33,32.67-14.18,11.38-31.96,45.62-48.03,48.97-17.04,3.56-45.93-12.02-65.51-12.59-22.09-.65-52.83,16.31-70.6,12.59-14.66-3.06-30.11-30.64-40.43-41.57-19.15-20.28-38.59-19.72-60.89-31.11-25.19-12.87-17.89-36.67-19.64-60.36-2.27-30.87-18.47-40.83-31.16-64.84-16.91-32.01,19.44-52.21,27.88-81.45,5.54-19.2-.16-53.87,9.85-68.15,10.07-14.38,49.06-19.97,66.35-33.65,14.41-11.4,32.04-46.32,48.82-49.18,17.2-2.93,45.07,12.06,64.72,12.8,22.27.84,51.14-15.97,69.81-12.8,16.61,2.82,34.57,37.73,48.82,49.18,17.13,13.76,56.34,19.33,66.35,33.65,9.88,14.14,4.2,50.54,10.53,70.47,6.78,21.37,34.53,44.15,31.92,65.86-2.24,18.62-27.45,39.98-33.17,61.83-4.94,18.87.75,53.84-10.31,67.69Z" />
        <path d="M238.82,68.07C104.43,76.3,30.99,231.31,110.21,341.1c68.96,95.57,211.43,95.17,280.04-.59,84.76-118.31-7.09-281.26-151.43-272.43ZM374.44,319.7c-57.48,90.24-188.7,90.73-247.83,2-61.13-91.74-.65-219.62,109.21-228.61,122.55-10.03,205.2,122.08,138.62,226.62Z" />
        <path d="M259.84,157.96c8.2,18.06,16.68,44.63,40.38,45.97,0,0,27.28,3.19,27.28,3.19,9.06,1.06,12.7,12.26,5.99,18.45-14.64,13.38-37.29,29.66-31.24,52.61,0,0,5.39,26.93,5.39,26.93,1.79,8.94-7.74,15.87-15.69,11.4-17.24-9.79-39.73-26.3-59.69-13.45,0,0-23.94,13.45-23.94,13.45-7.95,4.47-17.48-2.46-15.69-11.4,3.98-19.43,12.74-45.91-5.65-60.92,0,0-20.19-18.61-20.19-18.61-6.71-6.18-3.07-17.39,5.99-18.45,19.71-2.21,47.6-2.07,56.19-24.2,0,0,11.46-24.96,11.46-24.96,3.81-8.29,15.59-8.29,19.39,0Z" />
      </svg>
    );

    return (
      <div className={cn("rounded-md border-4 border-[#85193C]/30 bg-white/95 p-4", className)}>
        <div className="flex justify-start gap-3">
          <Badge />
          <div className="border-l border-[#85193C]/20 px-3">
            <h1 className="text-2xl font-bold tracking-tight text-[#85193C] md:text-3xl">{title}</h1>
            {subtitle && <h2 className="text-sm font-light text-[#1D3557] md:text-base">{subtitle}</h2>}
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-600">
              {recipient && <p className="italic">by {recipient}</p>}
              {date && <span>{date}</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "certificate") {
    return (
      <div
        className={cn(
          "relative flex flex-col items-center justify-center rounded-xl border-2 border-dotted border-[#85193C]/40 p-2",
          className,
        )}
      >
        <div className="z-10 rounded-sm border bg-white p-6 px-8 text-center shadow-sm">
          <Award strokeWidth={1} className="mx-auto h-8 w-8 text-[#85193C]" />
          <h1 className="mt-4 text-2xl font-bold tracking-tighter uppercase">
            Certificate
            <span className="block text-sm font-light normal-case">of {title}</span>
          </h1>
          {recipient && (
            <p className="mb-2 border-b border-[#85193C]/30 text-xl font-semibold text-[#1D3557]">
              {recipient}
            </p>
          )}
          {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
          {date && <div className="mt-2 text-xs text-gray-500">Awarded on: {date}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative flex flex-col items-center justify-center p-4", className)}>
      <div
        className={cn(
          "mb-2 inline-block rounded-md px-4 py-1 tracking-wider text-white",
          `bg-gradient-to-r ${levelColors[level]}`,
        )}
      >
        {level.toUpperCase()}
      </div>
      <h1 className="text-center text-3xl font-black tracking-tight text-white">{title}</h1>
      {subtitle && <h2 className="mt-2 text-center text-lg font-light text-white/90">{subtitle}</h2>}
      {date && <div className="mt-2 text-sm font-bold text-white">{date}</div>}
    </div>
  );
}
