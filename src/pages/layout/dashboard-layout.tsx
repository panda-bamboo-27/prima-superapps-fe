import NavbarDashboard from '@/components/dashboard/navbar-dashboard';
import Menu from '@/components/dashboard/menu';
import BreadCrumb from '@/components/dashboard/breadcrumb';
import { Outlet, useLocation } from 'react-router-dom';

const DashboardPage = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-svh bg-muted'>
      <NavbarDashboard />
      <main>
        <div className='p-4 py-2 px-4 grid md:grid-cols-dashboard gap-2 sm:grid-cols-1'>
          <Menu />
          <div className='flex flex-col w-full'>
            <BreadCrumb path={location.pathname} />
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
