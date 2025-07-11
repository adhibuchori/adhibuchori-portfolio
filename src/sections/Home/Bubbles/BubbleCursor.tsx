import React from "react";

interface BubbleCursorProps {
  label: string;
  className: string;
  top?: string;
  left?: string;
  right?: string;
}

const BubbleCursor: React.FC<BubbleCursorProps> = ({
  label,
  className,
  top,
  left,
  right,
}) => {
  return (
    <div
      className={`home-bubble-wrapper ${className} glass-effect`}
      style={{ top, left, right }}
    >
      <p>{label}</p>
    </div>
  );
};

export default BubbleCursor;
