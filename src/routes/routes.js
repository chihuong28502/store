import Dashboard from '@/components/dashboard/Dashboard'
import CalendarDBPage from '@/components/dashboard/comp/page/CalendarDBPage'
import ProductDetailDBPage from '@/components/dashboard/comp/page/ProductDetailDBPage'
import ProductsDBPage from '@/components/dashboard/comp/page/ProductsDBPage'
import TabsDBPage from '@/components/dashboard/comp/page/TabsDBPage'
import LoginPage from '@/components/pages/auth/login/LoginPage'
import RegisterPage from '@/components/pages/auth/register/RegisterPage'
import CheckOutPage from '@/components/pages/checkout/CheckOutPage'
import Home from '@/components/pages/home/Home'
import ProductsPage from '@/components/pages/products/ProductsPage'
import ProductDetailPage from '@/components/pages/products/product/ProductDetailPage'
import SearchListPage from '@/components/pages/search/SearchListPage'
// routes.js

const listRouter = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/products',
    component: ProductsPage
  },
  {
    path: '/products/product/:slug',
    component: ProductDetailPage
  },
  {
    path: '/checkout',
    component: CheckOutPage
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/products',
    component: ProductsDBPage
  },
  {
    path: '/dashboard/tabs',
    component: TabsDBPage
  },
  {
    path: '/dashboard/calendar',
    component: CalendarDBPage
  },
  {
    path: '/dashboard/product/:slug',
    component: ProductDetailDBPage
  },
  {
    path: '/search/:slug',
    component: SearchListPage
  }
]
export default listRouter
