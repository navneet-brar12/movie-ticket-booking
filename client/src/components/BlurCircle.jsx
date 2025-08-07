// BlurCircle.jsx

import React from 'react';

const BlurCircle = ({
  top,
  right,
  bottom,
  left,
  size = 300,
  color = 'rgba(168, 85, 247, 0.2)',
  zIndex = -1,
}) => {
  return (
    <div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        top,
        right,
        bottom,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        zIndex,
      }}
    ></div>
  );
};

export default BlurCircle;
