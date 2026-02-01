import React from 'react';

export function FixedGallery({imageData}: {imageData: {id: number, src: string, x: number, y: number, rot: number}[]}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-[90vh]">
      {imageData.map((item) => (
        <img
          key={item.id}
          src={"cats/"+item.src}
          alt="gallery"
          className="absolute w-[25%] min-w-[150px] max-w-[300px] shadow-lg border-4 border-white"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
};