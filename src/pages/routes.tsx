import {createBrowserRouter} from "react-router-dom";
import App from "../app/App";
import ErrorPage from "./ErrorPage/error-page";
import AboutPage from "./AboutPage/AboutPage";
import CatalogPage from "./CatalogPage/CatalogPage";
import ForCustomersPage from "./ForCustomersPage/ForCustomersPage";
import DeliveryPage from "./DeliveryPage/DeliveryPage";
import ActionsPage from "./ActionsPage/ActionsPage";
import BlogPage from "./BlogPage/BlogPage";
import ContactsPage from "./ContactsPage/ContactsPage";
import ProductCard from "../components/productCard/ProductCard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: App(),
        errorElement: <ErrorPage />,
    },
    {
        path: '/about',
        element: <AboutPage/>
    },
    {
        path: '/catalog',
        element: <CatalogPage/>
    },
    // {
    //     path: "catalog/:productId",
    //     element: <ProductCard />,
    // },
    {
        path: '/for-customers',
        element: <ForCustomersPage/>
    },
    {
        path: '/delivery',
        element: <DeliveryPage/>
    },
    {
        path: '/actions',
        element: <ActionsPage/>
    },
    {
        path: '/blog',
        element: <BlogPage/>
    },
    {
        path: '/contacts',
        element: <ContactsPage/>
    }
]);