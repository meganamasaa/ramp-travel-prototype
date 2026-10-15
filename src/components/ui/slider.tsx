import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
  markers?: { value: number; label: string }[];
}

function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  className,
  markers = [],
}: SliderProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative h-1 w-full">
        <div className="absolute h-1 w-full rounded-full bg-gray-200" />
        <div
          className="absolute h-1 rounded-full bg-[#D4E94B]"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange?.(Number(e.target.value))}
          className="absolute w-full h-1 opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#D4E94B] shadow-sm cursor-pointer"
          style={{ left: `calc(${percentage}% - 6px)` }}
        />
      </div>
      {markers.length > 0 && (
        <div className="relative mt-2 text-xs text-gray-500">
          {markers.map((marker) => {
            const markerPercentage = ((marker.value - min) / (max - min)) * 100;
            return (
              <span
                key={marker.value}
                className="absolute transform -translate-x-1/2"
                style={{ left: `${markerPercentage}%` }}
              >
                {marker.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { Slider };
