import type { Route } from "./+types/home";
import { FixedGallery, type imgData } from "../components/FixedGallery";
import { Link, NavLink } from "react-router";

const imageData: imgData[] = [
  { id: 1, src: "1.jpg", desktop: {x: 13, y: 32, rot: -10, scale: 1}, mobile: {x: 20, y: 35, rot: -10, scale: 1} },
  { id: 2, src: "2.jpg", desktop: {x: 30, y: 75, rot: 12, scale: 1}, mobile: {x: 30, y: 77, rot: 12, scale: 1} },
  { id: 4, src: "4.jpg", desktop: {x: 70, y: 78, rot: 2, scale: 1}, mobile: {x: 70, y: 80, rot: 2, scale: 1} },
  { id: 3, src: "3.jpg", desktop: {x: 75, y: 20, rot: 15, scale: 1}, mobile: {x: 75, y: 35, rot: 15, scale: 1} },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Naleśnik?" },
    { name: "description", content: "Będziesz moim naleśnikiem?" },
  ];
}

function Question() {
  return (
    <div className="relative min-h-screen w-full">
      <FixedGallery imageData={imageData}></FixedGallery>
      <main className="flex flex-col items-center justify-center">
        <p className="m-10 relative h-2 z-50 w-full">Jutro jest <Link className="underline text-blue-600" to="https://info-day.pl/events/dzien-nalesnika/">dzień naleśnika</Link></p>
        <h1 className="w-full mt-70 md:mt-35 h-20 text-center text-5xl z-50">Będziesz moim naleśnikiem???</h1>
        <NavLink to={"/tak"} className="text-white mt-5 bg-green-600 bg-success box-border border hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">TAAAAK</NavLink>
        <Link className="underline absolute z-50 text-xs" style={{left: 0, top: '95%'}} to="/nie">nie...</Link>
      </main>
    </div>
  );
}


export default function Home(){
  return <Question></Question> 
}

