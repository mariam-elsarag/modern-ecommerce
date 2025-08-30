import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/Public_Route.tsx", [route("login", "routes/auth/Login.tsx")]),
  index("routes/home/home.tsx"),
  ...prefix("product", [
    index("routes/product/Products.tsx"),
    route(":id", "routes/product/Product_Details.tsx"),
  ]),
  route(":id/cart", "routes/cart/Cart.tsx"),
  route(":id/checkout", "routes/checkout/Checkout.tsx"),
] satisfies RouteConfig;
