import React from 'react';

interface SwipeHintProps {
    size?: number;
    color?: string;
    duration?: number;
    gap?: number | string;
    ariaLabel?: string;
    className?: string;
}

const SwipeHint: React.FC<SwipeHintProps> = ({
                                                 size = 36,
                                                 color = '#000000',
                                                 duration = 1.5,
                                                 gap = '6px',
                                                 ariaLabel = 'Swipe hint',
                                                 className = '',
                                             }) => {
    const css = `
  .swipe-hint-wrapper { display: inline-flex; align-items: center; justify-content: center; }
  .swipe-hint { font-family: Arial, sans-serif !important; display: inline-flex; gap: ${gap}; align-items: center; justify-content: center; line-height: 1; user-select: none; -webkit-tap-highlight-color: transparent; }
  .swipe-hint .chev { display: inline-block; font-size: ${size}px; color: ${color}; opacity: 0; transform: scale(1); will-change: opacity, transform; animation-name: swipePulse; animation-duration: ${duration}s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }
  .swipe-hint .chev:nth-child(1){ animation-delay: 0s; }
  .swipe-hint .chev:nth-child(2){ animation-delay: calc(${duration}s / 6); }
  .swipe-hint .chev:nth-child(3){ animation-delay: calc(${duration}s / 3); }
  @keyframes swipePulse { 0% { opacity: 0; transform: scale(2); } 20% { opacity: 1; transform: scale(2.2); } 50% { opacity: 0.25; transform: scale(1); } 100% { opacity: 0; transform: scale(1); } }
  @media (prefers-reduced-motion: reduce) { .swipe-hint .chev { animation: none; opacity: 1; transform: scale(2); } }
  `;

    return (
        <span className={`swipe-hint-wrapper ${className}`} aria-label={ariaLabel}>
      <style>{css}</style>
      <div className="swipe-hint" role="img" aria-label={ariaLabel}>
        <span className="chev">›</span>
        <span className="chev">›</span>
        <span className="chev">›</span>
      </div>
    </span>
    );
};

export default SwipeHint;
