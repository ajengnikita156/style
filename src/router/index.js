import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Contact from "../views/Contact.vue";
import Brand from "../views/Brand.vue";
import Kategori from "../views/Kategori.vue";
import FilterBrand from "../views/FilterBrand.vue";
import Profile from "../views/Profile.vue";
import CartCheckout from "../views/CartCheckout.vue";
import Order from "../views/Order.vue";
import Wishlist from "../views/Wishlist.vue";
import FilterPageCategory from "../views/FilterPageCategory.vue";
import Offers from "../views/Offers.vue";


function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem('token'))
        isAuthenticated = true;
    else 
        isAuthenticated = false;
    if (isAuthenticated) {
        next();
    }
    else {
        next('/login');
    }
}
const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/product",
        name: "Product",
        component: Product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/keranjang",
        name: "CartCheckout",
        component: CartCheckout,
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () => import("../views/Checkout.vue")
    },
    {
        path:"/order/:orderCode",
        name: "Order",
        component: Order,
        props: true,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/brand",
        name: "Brand",
        component: Brand,
    },
    {
        path: '/brand/:id',
        name: 'FilterBrand',
        component: FilterBrand
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
   
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
        beforeEnter: cekToken
    },
    {
        path: "/wishlists",
        name: "Wishlist",
        component: Wishlist,
    },
    {
        path: "/kategori/:slug",
        name: "FilterCategory",
        component: FilterPageCategory,
        props: true,
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
