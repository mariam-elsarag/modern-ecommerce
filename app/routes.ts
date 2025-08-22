import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("product/:id", "routes/product/Product_Details.tsx"),
] satisfies RouteConfig;
