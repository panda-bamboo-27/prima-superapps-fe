import NavbarDashboard from "@/components/dashboard/navbar-dashboard";
import Menu from "@/components/dashboard/menu";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
    return (
    <div className="flex flex-col min-h-svh bg-muted">
        <NavbarDashboard/>
        <main className="mt-2">
            <div className="p-4 py-3 px-4 grid md:grid-cols-dashboard gap-4 sm:grid-cols-1">
                <Menu />
                <div><Outlet /></div>
            </div>
        </main>
    </div>
    )
}

export default DashboardPage;