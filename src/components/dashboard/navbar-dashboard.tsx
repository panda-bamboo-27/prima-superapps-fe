
import { Card } from "@/components/ui/card";
import LogoPrimaSuperApps from "@/assets/logo-prima_superapps_inventory_with_text.svg";
import ProfileMenuBar from "@/components/dashboard/profile-menubar";

const NavbarDashboard = () => {
    return (
        <Card className="bg-card p-4 py-3 px-4 border-0 flex">
            <div className="container mx-auto flex justify-between items-center">
                <img className="h-full w-auto" src={LogoPrimaSuperApps} />
                <ProfileMenuBar />
            </div>
        </Card>
    )
}

export default NavbarDashboard;