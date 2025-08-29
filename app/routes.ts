import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  ...prefix("product", [
    index("routes/product/Products.tsx"),
    route(":id", "routes/product/Product_Details.tsx"),
  ]),
] satisfies RouteConfig;
