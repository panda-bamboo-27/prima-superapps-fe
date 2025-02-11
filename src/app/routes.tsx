
import LandingPage from "@/pages/landing-page";
import DashboardLayout from "@/pages/layout/dashboard-layout";
import LoginPage from "@/pages/auth/login-page";
import HomePage from "@/pages/home-page";
import PriceComparisonPage from "@/pages/price-comparison-page";
import SearchItemPage from "@/pages/search-item-page";
import VendorPage from "@/pages/vendors-page";
// import ItemCategoriesPage from "@/pages/item-categories-page";
import ItemsPage from "@/pages/item-page";
import NotesPage from "@/pages/notes-page";
import React from 'react';

export interface RouteObject {
    [key: string]: RouteItem[],
}

export interface RouteItem {
    path: string,
    element: React.ReactNode,
    children: RouteObject,
    is_index: boolean,
}

const routes : RouteObject = {
    "guest": [
        {
            path: "/",
            element: <LandingPage /> ,
            is_index: false,
            children: {}
        },
        {
            path: "/login",
            element: <LoginPage />,
            is_index: false,
            children: {}
        }
    ],

    /*
    "authenticated": [
        {
            path: "/app",
            element: <DashboardLayout />,
            is_index: false,
            children: {
                "index":[
                    {
                        path: "",
                        is_index: true,
                        element: <HomePage />,
                        children: {}
                    }
                ],
                "menu": [
                    {
                        path: "/search-item",
                        is_index: false,
                        element: <SearchItemPage />,
                        children: {}
                    },
                    {
                        path: "/price-comparison-tool",
                        is_index: false,
                        element: <PriceComparisonPage />,
                        children: {}
                    }
                ],
                "master_data": [
                    {
                        path: "/vendors",
                        is_index: false,
                        element: <VendorPage />,
                        children: {}
                    },
                    {
                        path: "/item-categories",
                        is_index: false,
                        // element: <ItemCategoriesPage />,
                        element: null,
                        children: {}
                    },
                    {
                        path: "/items",
                        is_index: false,
                        element: <ItemsPage />,
                        children: {}
                    },
                ],
                "tools": [
                    {
                        path: "/notes",
                        is_index: false,
                        element: <NotesPage />,
                        children: {}
                    },
                ]
            }
        }
    ]
        
        */
};

export default routes;