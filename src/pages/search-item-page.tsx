import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, InputButton } from '@/components/ui/input';

const SearchItemPage = () => {
  return (
    <Card className='bg-card py-5 px-5 border-0 shadow-lg'>
      <div className='grid grid-cols-1'>
        <div className='md:col-span-3 w-full flex flex-col'>
          <Input className='' placeholder='Enter keyword ...'></Input>
          <div className='mt-2 w-full items-center justify-between flex flex-row'>
            <div className='text-sm flex gap-2'>
              <p className=''>Search by</p>
              <select>
                <option>Choose</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <Button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
                  />
                </svg>
                Filter
              </Button>
              <Button>Search</Button>
            </div>
          </div>
        </div>
        <div className='w-full'></div>
      </div>
    </Card>
  );
};

export default SearchItemPage;
