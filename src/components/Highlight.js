import React from 'react';

export default function Highlight({ children, color }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '6px',
        color: 'rgb(51, 51, 51)',
        padding: '0.2rem 0.5rem'
      }}
    >
      {children}
    </span>
  );
}
