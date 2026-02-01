import React from 'react';

const imageData = [
  { id: 1, src: "1.jpg", x: 18, y: 30, rot: -10 },
  { id: 2, src: "2.jpg", x: 50, y: 80, rot: 5 },
  { id: 3, src: "3.jpg", x: 75, y: 20, rot: 15 },
];

export const FixedGallery = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-[90vh] overflow-hidden">
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