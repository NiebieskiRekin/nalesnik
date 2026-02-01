export type imgSize = {x: number, y: number, rot: number, scale: number};
export type imgData = {id: number, src: string, desktop: imgSize, mobile: imgSize}

import { useEffect, useState } from "react";

export function FixedGallery({imageData}: {imageData: imgData[]}) {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-[90vh]">
      {imageData.map((item) => (
        <img
          key={item.id}
          src={"cats/"+item.src}
          alt="gallery"
          className="absolute w-[20%] min-w-[150px] max-w-[300px] shadow-lg border-4 border-white"
          style={{
            left: `${isDesktop ? item.desktop.x : item.mobile.x}%`,
            top: `${isDesktop ? item.desktop.y : item.mobile.y}%`,
            transform: `translate(-50%, -50%) rotate(${isDesktop ? item.desktop.rot : item.mobile.rot}deg)`,
            scale: isDesktop ? item.desktop.scale : item.mobile.scale
          }}
        />
      ))}
    </div>
  );
};