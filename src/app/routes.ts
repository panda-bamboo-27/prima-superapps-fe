
import LandingPage from "@/pages/landing-page";
import DashboardLayout from "@/pages/layout/dashboard-layout";
import LoginPage from "@/pages/auth/login-page";
import HomePage from "@/pages/home-page";
import PriceComparisonPage from "@/pages/price-comparison-page";
import SearchItemPage from "@/pages/search-item-page";
import VendorPage from "@/pages/vendors-page";
import ItemCategoriesPage from "@/pages/item-categories-page";
import ItemsPage from "@/pages/item-page";
import NotesPage from "@/pages/notes-page";

const routes = {
    guest: [
        {
            path: "/",
            element: LandingPage,
            children: []
        },
        {
            path: "/login",
            element: LoginPage,
            children: []
        }],
    authenticated: [
        {
            path: "/app",
            element: DashboardLayout,
            children: {
                "index":
                    {
                        path: "",
                        is_index: true,
                        element: HomePage,
                    },
                "menu": [
                    {
                        path: "/search-item",
                        is_index: false,
                        element: SearchItemPage,
                    },
                    {
                        path: "/price-comparison-tool",
                        is_index: false,
                        element: PriceComparisonPage,
                    }
                ],
                "master_data": [
                    {
                        path: "/vendors",
                        is_index: false,
                        element: VendorPage,
                    },
                    {
                        path: "/item-categories",
                        is_index: false,
                        element: ItemCategoriesPage,
                    },
                    {
                        path: "/items",
                        is_index: false,
                        element: ItemsPage,
                    },
                ],
                "tools": [
                    {
                        path: "/notes",
                        is_index: false,
                        element: NotesPage,
                    },
                ]
            }
        }
    ]
};

export default routes;