import { createPortal } from "react-dom";
import { FixedGallery } from "./FixedGallery";
import { Link, NavLink } from "react-router";


export function Question() {
  return (
    <div className="relative min-h-screen w-full">
      <FixedGallery></FixedGallery>
      <main className="flex flex-col items-center justify-center">
        <p className="m-10 relative h-2 z-50 w-full">Dzisiaj jest <Link className="underline text-blue-600" to="https://info-day.pl/events/dzien-nalesnika/">dzień naleśnika</Link></p>
        <h1 className="w-full mt-40 h-20 text-center text-5xl z-50">Będziesz moim naleśnikiem???</h1>
        <NavLink to={"/tak"} className="text-white bg-green-600 bg-success box-border border hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">TAAAAK</NavLink>
        <Link className="underline absolute z-50 text-xs" style={{left: 0, top: '95%'}} to="/nie">nie...</Link>
      </main>
    </div>
  );
}
