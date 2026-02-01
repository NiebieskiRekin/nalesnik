import { FixedGallery } from "../components/FixedGallery";

const imageData = [
  { id: 5, src: "5.jpg", x: 12, y: 30, rot: -10 },
  { id: 6, src: "6.jpg", x: 85, y: 50, rot: 2 },
  { id: 7, src: "7.jpg", x: 65, y: 85, rot: -7 },
  { id: 9, src: "9.jpg", x: 15, y: 90, rot: -90 },
{ id: 8, src: "8.jpg", x: 45, y: 65, rot: 12 },
];

export default function Lulson() {
return (
    <div className="relative min-h-screen w-full">
    <FixedGallery imageData={imageData}></FixedGallery>
    <main className="flex flex-col items-center justify-center">
        <h1 className="w-full mt-40 h-20 text-center text-5xl z-50">Lulson 😻</h1>
    </main>
    </div>
);
}
