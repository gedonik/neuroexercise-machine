import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ErrorPage from "./pages/error/error-page";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './styles/index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: App(),
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
