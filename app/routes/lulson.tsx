import { FixedGallery, type imgData } from "../components/FixedGallery";

const imageData: imgData[] = [
  { id: 5, src: "5.jpg", desktop: { x: 20, y: 40, rot: -10, scale: 1}, mobile: { x: 25, y: 40, rot: -10, scale: 1}},
  { id: 6, src: "6.jpg", desktop: {x: 85, y: 45, rot: 2, scale: 1 }, mobile: {x: 80, y: 45, rot: 2, scale: 1}},
  { id: 7, src: "7.jpg", desktop: {x: 70, y: 85, rot: -7, scale: 1 }, mobile: {x: 80, y: 99, rot: -7, scale: 1.5 }},
  { id: 9, src: "9.jpg", desktop: {x: 15, y: 90, rot: -90, scale: 1}, mobile: {x: 15, y: 90, rot: -90, scale: 1 }},
  { id: 8, src: "8.jpg", desktop: { x: 47, y: 67, rot: 12, scale: 1 }, mobile: {x: 47, y: 67, rot: 12, scale: 1} },
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
