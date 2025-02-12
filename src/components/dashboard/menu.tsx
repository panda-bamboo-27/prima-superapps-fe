import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import IconHome from '@/assets/pi-home.svg';
import IconSearchItem from '@/assets/pi-search-item.svg';
import IconPriceComparison from '@/assets/pi-price-comparison.svg';
import IconVendor from '@/assets/pi-vendors.svg';
import IconItem from '@/assets/pi-items.svg';
import IconCategory from '@/assets/pi-categories.svg';
import IconNotes from '@/assets/pi-notes.svg';

import routes, { RouteItem } from '@/app/routes';
import { useNavigate } from 'react-router-dom';

interface MenuButtonListType {
  title: string;
  items: RouteItem[];
}

interface MenuButtonType {
  attributes: RouteItem;
}

const MenuButton = (props: MenuButtonType) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate(props.attributes.path);
      }}
      variant='secondary'
      className='min-h-[80px] w-auto border-2 border-pink-900 bg-card hover:bg-pink-900 hover:text-white flex flex-col'
    >
      <img src={props.attributes.icon} className='md:h-10'></img>
      {props.attributes.title}
    </Button>
  );
};

const MenuButtonList = (props: MenuButtonListType) => {
  return (
    <li className=' border-gray-300 pb-4'>
      <p className='text-xl font-bold text-pink-900'>{props.title}</p>
      <ul className='flex flex-row flex-wrap gap-2 justify-start items-center h-full my-2'>
        {props.items.map((item, index) => (
          <MenuButton attributes={item} />
        ))}
      </ul>
    </li>
  );
};

const Menu = () => {
  return (
    <div className='flex flex-row '>
      <div className='flex flex-col md:w-[400px] sm:w-full'>
        <p className='text-xl'>Welcome Arisal!</p>
        <Card className='my-2 bg-card p-4 py-3 px-4 border-0 shadow-lg'>
          <ul>
            {}
            <MenuButtonList
              title='Menu'
              items={[
                routes.authenticated[0].children.index[0],
                ...routes.authenticated[0].children.menu,
              ]}
            />
            <hr />
            <MenuButtonList
              title='Master Data'
              items={routes.authenticated[0].children.master_data}
            />
          </ul>
        </Card>
        <Card className='my-4 bg-card p-4 py-3 px-4 border-0 shadow-lg'>
          <ul>
            <MenuButtonList title='Tools' items={routes.authenticated[0].children.tools} />
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
