import React from "react";

interface NexaLogoProps {
  className?: string;
  light?: boolean;
  showIntelligence?: boolean;
}

export default function NexaLogo({ 
  className = "h-5", 
  light = false,
  showIntelligence = false
}: NexaLogoProps) {
  const textColor = light ? "text-white" : "text-slate-800";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <span className={`font-display font-black tracking-wider text-sm uppercase ${textColor}`}>
        NEXA
      </span>
    </div>
  );
}
