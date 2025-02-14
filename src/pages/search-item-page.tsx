import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, InputButton, InputPrimary } from '@/components/ui/input';
import { Filter, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import IconSearch from "@/assets/icon-search.svg";
import IconFilter from "@/assets/icon-filter.svg";
import IconItems from "@/assets/pi-items.svg";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

interface SelectMultipleType {
  title: string
}
const SelectMultiple = (props: SelectMultipleType) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) =>{
      // if component rendered and users click outside the component, which not contains the event target
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }

  },[])

  const toggleDropdown = (event: any) => {
    setIsOpen(!isOpen)
  }

  const SelectMultipleOption = () => {
    return (
      <label className='p-1 px-2 flex justify-between hover:bg-gray-100'>
        Check 1
        <input type='checkbox'></input>
      </label>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <label className='text-sm font-bold'>{props.title}</label>
      <button onClick={toggleDropdown} className='flex items-center justify-between w-full border-pink-900 border rounded-md hover:bg-gray-100'>
        <div className='flex items-center'>
          <div className='py-1 px-2 bg-pink-900'>
            <img src={IconItems} className="max-h-full" ></img>
          </div>
          <p className='pl-2 text-gray-500 truncate text-sm'>Select Items</p>
        </div>
        <ChevronDown />
      </button>
      {isOpen && (
        <div className='absolute left-0 shadow-md w-full border bg-card border-gray-100 z-10'>
          <div className='select-mutliple-body'>
            <SelectMultipleOption />
            <hr/>
            <SelectMultipleOption />
            <hr/>
            <SelectMultipleOption />
            <hr/>
            <SelectMultipleOption />
          </div>
          <Button variant="link">Load More...</Button>
        </div>)
      }
    </div>
  )
}

const SearchItemPage = () => {
  return (
    <Card className='bg-card py-5 px-5 border-0 shadow-lg'>
      <div className='grid sm:grid-cols-1 md:grid-cols-4'>
        <div className='md:col-span-3 w-full flex flex-col'>
          <div className='flex flex-col'>
            <label className='text-sm font-bold'>
              Enter Keyword
            </label>
            <InputPrimary className='mt-2' placeholder='Product Name, Product Code ...'></InputPrimary>
          </div>
          <div className='mt-2 w-full items-start justify-between flex flex-row'>
            <div className='text-sm flex gap-2'>
              <p className=''>Search by</p>
              <select>
                <option>Choose</option>
              </select>
            </div>
            <div className='flex gap-2'>
              <Button variant="default" >
                {/* <svg
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
                </svg> */}
                <Filter />Filter
              </Button>
              <Button variant="pi_primary">
              Search
                <img src={IconSearch} width={20}></img>
              </Button>
            </div>
          </div>
          
        <div className='w-full flex flex-col sm:mt-8'>
          <p>Search Result:</p>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className='text-right'>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className='font-medium'>{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className='text-right'>$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
        </div>
        <div className='flex flex-col px-2'>
          <div className='inline-flex items-center bg-gray-100 rounded-md'>
            <img src={IconFilter} width={20}></img>
            <p className='font-bold text-xl'>Filters</p>
          </div>
          <hr/>
          <SelectMultiple className="" title="Select Item Category(s)" key="select-item-categories" />
          <hr/>
          <SelectMultiple title="Select Item Vendor(s)" key="select-vendors" />
        </div>
      </div>
    </Card>
  );
};

export default SearchItemPage;
