import { useEffect } from 'react';
import data from '../../data/profile';

// Converts hex to rgba string
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const { accent, accentHover, secondary } = data.theme || {};
    const root = document.documentElement;

    if (accent) {
      root.style.setProperty('--green', accent);
      root.style.setProperty('--green-dim', hexToRgba(accent, 0.07));
      root.style.setProperty('--green-glow', hexToRgba(accent, 0.15));
    }
    if (accentHover) {
      root.style.setProperty('--green-hover', accentHover);
    }
    if (secondary) {
      root.style.setProperty('--purple', secondary);
      root.style.setProperty('--purple-dim', hexToRgba(secondary, 0.07));
    }
  }, []);

  return children;
}
