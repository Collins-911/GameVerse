import { useEffect } from 'react';
import '../css/animationCursor.css';

export default function AnimationCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follower');
    document.body.appendChild(cursor);

    const moveCursor = (x, y) => {
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
    };

    const handleMouseMove = (e) => moveCursor(e.clientX, e.clientY);

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cursor.remove();
    };
  }, []);

  return null;
}
