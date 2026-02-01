import type { Route } from "./+types/home";
import { FixedGallery } from "../components/FixedGallery";
import { Link, NavLink } from "react-router";

const imageData = [
  { id: 1, src: "1.jpg", x: 18, y: 30, rot: -10 },
  { id: 4, src: "4.jpg", x: 70, y: 72, rot: 2 },
  { id: 3, src: "3.jpg", x: 75, y: 20, rot: 15 },
  { id: 2, src: "2.jpg", x: 37, y: 75, rot: 12 },
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
        <p className="m-10 relative h-2 z-50 w-full">Dzisiaj jest <Link className="underline text-blue-600" to="https://info-day.pl/events/dzien-nalesnika/">dzień naleśnika</Link></p>
        <h1 className="w-full mt-40 h-20 text-center text-5xl z-50">Będziesz moim naleśnikiem???</h1>
        <NavLink to={"/tak"} className="text-white bg-green-600 bg-success box-border border hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">TAAAAK</NavLink>
        <Link className="underline absolute z-50 text-xs" style={{left: 0, top: '95%'}} to="/nie">nie...</Link>
      </main>
    </div>
  );
}


export default function Home(){
  return <Question></Question> 
}

