import RegisterPage from "../components/pages/auth/register/RegisterPage";
import LoginPage from "../components/pages/auth/login/LoginPage";
import Home from "../components/pages/home/Home";
import ProductsPage from "../components/pages/products/ProductsPage";

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
];
export default listRouter;
