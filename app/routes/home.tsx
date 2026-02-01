import type { Route } from "./+types/home";
import { Question } from "../question/question";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Naleśnik?" },
    { name: "description", content: "Będziesz moim naleśnikiem?" },
  ];
}

export default function Home() {
  return <Question />;
}
