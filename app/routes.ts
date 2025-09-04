import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/Public_Route.tsx", [
    route("login", "routes/auth/Login.tsx"),
    route("register", "routes/auth/Register.tsx"),
    route("forget-password", "routes/auth/Forget_Password.tsx"),
    route(":email/:token/reset-password", "routes/auth/Reset_Password.tsx"),
    route(":email/activate-account", "routes/auth/Activate_Account.tsx"),
  ]),
  index("routes/home/home.tsx"),
  ...prefix("product", [
    index("routes/product/Products.tsx"),
    route(":id", "routes/product/Product_Details.tsx"),
  ]),
  route(":id/cart", "routes/cart/Cart.tsx"),
  route(":id/checkout", "routes/checkout/Checkout.tsx"),
  route("success-payment", "routes/payment/Payment_Success.tsx"),
  route(":id/failed-payment", "routes/payment/Payment_Failed.tsx"),
] satisfies RouteConfig;
