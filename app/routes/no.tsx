import { FixedGallery } from "../components/FixedGallery";
import { NavLink } from "react-router";

const imageData = [
  { id: 1, src: "gili.gif", x: 50, y: 50, rot: 0 },
];

export default function No() {
  return (
    <div className="relative min-h-screen w-full">
      <FixedGallery imageData={imageData}></FixedGallery>
      <main className="flex flex-col items-center justify-center">
        <h1 className="w-full mt-40 h-20 text-center text-5xl z-50">Na pewno???</h1>
        <NavLink to={"/tak"} className="text-white bg-green-600 bg-success box-border border hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">JEDNAK TAAAAK!</NavLink>
      </main>
    </div>
  );
}
