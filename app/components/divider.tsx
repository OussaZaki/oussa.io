import React from "react";

interface GradientDividerProps {
  className?: string;
}

export default function GradientDivider({
  className = "",
}: GradientDividerProps) {
  return (
    <div className={`w-full h-px my-8 ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        role="separator"
        aria-hidden="true"
      />
    </div>
  );
}
