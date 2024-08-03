import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Jobcard() {
  return (
    <div className="lg:flex flex-col lg:items-center lg:justify-between mb-8 border-2 rounded border-solid border-slate-50 px-8 py-6 cursor-pointer transform transition shadow-md duration-7000 hover:bg-gray-50 hover:scale-105 hover:rounded">
      <div className="lg:flex w-full lg:justify-between">
        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {/* <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            Edit
          </button>
        </span> */}

          {/* <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <LinkIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
            View
          </button>
        </span> */}

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CursorArrowRaysIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
              Apply
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  Edit
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                  View
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 w-full justify-between">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          Full-time
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          Remote
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          $120k &ndash; $140k
        </div>
      </div>
      <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="currentColor" className="size-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
          </svg>
          Experience
        </div>
        <div className="mt-2 flex text-sm text-gray-500">
          <CalendarIcon aria-hidden="true" className="mr-1.5 ml-14 h-5 w-5 flex-shrink-0 text-gray-400" />
          Closing on Jan 9, 2020
        </div>
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          $120k &ndash; $140k
        </div> */}
      </div>
      <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="mt-2 flex text-sm text-gray-500">
          <CalendarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          Posted on Jan 9, 2020
        </div>
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
          $120k &ndash; $140k
        </div> */}
      </div>
      <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="mt-2 flex text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
          </svg>
          <p className="ml-1 bg-gray-100 rounded p-1 text-xs">ReactJs</p>
          <p className="ml-1 bg-gray-100 rounded p-1 text-xs">Javascript</p>
        </div>
      </div>
    </div>
  )
}
