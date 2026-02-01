import { Link } from "react-router";
import { FixedGallery } from "../components/FixedGallery";

const imageData = [
  { id: 10, src: "hapi.gif", desktop: {x: 50, y: 65, rot: 0, scale: 1}, mobile: {x: 68, y: 65, rot: 0, scale: 2} },
];

export default function Yes() {
  return (
    <div className="relative min-h-screen w-full">
      <FixedGallery imageData={imageData}></FixedGallery>
      <main className="flex flex-col items-center justify-center">
        <h1 className="w-full mt-40 h-20 text-center text-5xl z-50">Kocham Cię! ❤️</h1>
        <Link className="absolute text-2xl" style={{top: '95%'}} to="/lulson">😻</Link>
      </main>
    </div>
  );
}
