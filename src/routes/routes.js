import RegisterPage from "@/components/pages/auth/register/RegisterPage";
import LoginPage from "@/components/pages/auth/login/LoginPage";
import Home from "@/components/pages/home/Home";
import ProductsPage from "@/components/pages/products/ProductsPage";
import ProductDetail from "@/components/comp/products/productDetail/ProductDetail";
// routes.js

const listRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  {
    path: "/productDetail",
    component: ProductDetail,
  },
];
export default listRouter;
