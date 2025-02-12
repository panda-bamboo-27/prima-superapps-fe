import React from 'react';

import LandingPage from '@/pages/landing-page';
import DashboardLayout from '@/pages/layout/dashboard-layout';
import LoginPage from '@/pages/auth/login-page';
import HomePage from '@/pages/home-page';
import PriceComparisonPage from '@/pages/price-comparison-page';
import SearchItemPage from '@/pages/search-item-page';
import VendorPage from '@/pages/vendors-page';
import ItemCategoriesPage from '@/pages/item-categories-page';
import ItemsPage from '@/pages/item-page';
import NotesPage from '@/pages/notes-page';

// icons
import IconHome from '@/assets/pi-home.svg';
import IconSearchItem from '@/assets/pi-search-item.svg';
import IconPriceComparison from '@/assets/pi-price-comparison.svg';
import IconVendor from '@/assets/pi-vendors.svg';
import IconItem from '@/assets/pi-items.svg';
import IconCategory from '@/assets/pi-categories.svg';
import IconNotes from '@/assets/pi-notes.svg';

export interface RouteObject {
  [key: string]: RouteItem[];
}

export interface RouteItem {
  path: string;
  title?: string;
  element: React.ReactNode;
  children: RouteObject;
  is_index: boolean;
  icon?: any;
}

const routes: RouteObject = {
  guest: [
    {
      path: '/',
      element: <LandingPage />,
      is_index: false,
      children: {},
    },
    {
      path: '/login',
      element: <LoginPage />,
      is_index: false,
      children: {},
    },
  ],

  authenticated: [
    {
      path: '/app',
      element: <DashboardLayout />,
      is_index: false,
      children: {
        index: [
          {
            path: '',
            title: 'Home',
            is_index: true,
            element: <HomePage />,
            children: {},
            icon: IconHome,
          },
        ],
        menu: [
          {
            path: 'search-item',
            title: 'Search Item',
            is_index: false,
            element: <SearchItemPage />,
            children: {},
            icon: IconSearchItem,
          },
          {
            path: 'price-comparison-tool',
            title: 'Price Comparison Tool',
            is_index: false,
            element: <PriceComparisonPage />,
            children: {},
            icon: IconPriceComparison,
          },
        ],
        master_data: [
          {
            path: 'vendors',
            title: 'Vendors',
            is_index: false,
            element: <VendorPage />,
            children: {},
            icon: IconVendor,
          },
          {
            path: 'item-categories',
            title: 'Item Categories',
            is_index: false,
            element: <ItemCategoriesPage />,
            children: {},
            icon: IconCategory,
          },
          {
            path: 'items',
            title: 'Items',
            is_index: false,
            element: <ItemsPage />,
            children: {},
            icon: IconItem,
          },
        ],
        tools: [
          {
            path: 'notes',
            title: 'Notes',
            is_index: false,
            element: <NotesPage />,
            children: {},
            icon: IconNotes,
          },
        ],
      },
    },
  ],
};

export default routes;
