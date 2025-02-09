
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import IconHome from "@/assets/pi-home.svg";
import IconSearchItem from "@/assets/pi-search-item.svg";
import IconPriceComparison from "@/assets/pi-price-comparison.svg";
import IconVendor from "@/assets/pi-vendors.svg";
import IconItem from "@/assets/pi-items.svg";
import IconCategory from "@/assets/pi-categories.svg";
import IconNotes from "@/assets/pi-notes.svg";

const Menu = () => {
    return (
        <div className="flex flex-row ">
        <div className="flex flex-col md:w-[400px] sm:w-full">
            <p className="text-xl">Welcome Arisal!</p>
            <Card className="my-4 bg-card p-4 py-3 px-4 border-0 shadow-lg">
                <ul>
                    <li className="border-b-2 border-gray-300 pb-4"><p className="text-xl font-bold text-pink-900">Menu</p>
                        <ul className="flex flex-row flex-wrap gap-2 justify-start items-center h-full my-2">
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconHome} className="md:h-10"></img>Home</Button></li>
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconSearchItem} className="md:h-10"></img>Search Item</Button></li>
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconPriceComparison} className="md:h-10"></img>Price Comparison</Button></li>
                        </ul>
                    </li>
                    

                    <li><p className="text-xl font-bold text-pink-900 mt-2">Master Data</p>
                        <ul className="flex flex-row flex-wrap  gap-2 justify-start items-center h-full my-2">
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconVendor} className="md:h-10"></img>Vendors</Button></li>
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconItem} className="md:h-10"></img>Items</Button></li>
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconCategory} className="md:h-10"></img>Item Categories</Button></li>
                        </ul>
                    </li>
                </ul>
            </Card>
            <Card className="my-4 bg-card p-4 py-3 px-4 border-0 shadow-lg">
                <ul>
                    <li className="pb-4"><p className="text-xl font-bold text-pink-900">Tools</p>
                        <ul className="flex flex-row gap-2 justify-start items-center h-full my-2">
                            <li><Button variant="secondary" className="min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col"><img src={IconNotes} className="md:h-10"></img>Notes</Button></li>
                        </ul>
                    </li>
                </ul>
            </Card>
        </div>
</div>
    )
}

export default Menu;