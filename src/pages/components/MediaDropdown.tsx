/* eslint-disable @typescript-eslint/no-unused-vars */
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import React from 'react'

const solutions = [
  { name: 'PODCAST',  href: '/media#podcast',  },
  { name: 'NEWS', href: '/media#news'},
  
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function MediaDropdown() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
        <span>MEDIA</span>
        <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className=" flex-auto overflow-hidden rounded-3xl bg-zinc-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6  p-2 border-b border-white">
                
                <div>
                  <a href={item.href} className="font-semibold text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-zinc-800">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white "
              >
                <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                {item.name}
              </a>
            ))}
          </div> */}
        </div>
      </PopoverPanel>
    </Popover>
  )
}
