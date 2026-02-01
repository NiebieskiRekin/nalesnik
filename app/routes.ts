import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    route("/tak", "./routes/yes.tsx"),
    route("/nie", "./routes/no.tsx"),
    route("/lulson", "./routes/lulson.tsx"),
] satisfies RouteConfig;
