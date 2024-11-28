'use client';

import { Menu, RadioGroup, Transition } from '@headlessui/react';
import { Icon } from '@iconify-icon/react';
import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState } from 'react';

const Sun = () => (
  <div className="grid place-items-center">
    <Icon icon="mingcute:sun-fill" width="1.5em" height="1.5em" />
  </div>
);
const Moon = () => (
  <div className="grid place-items-center">
    <Icon icon="bxs:moon" width="1.5em" height="1.5em" />
  </div>
);
const Monitor = () => (
  <div className="grid place-items-center">
    <Icon icon="cuida:monitor-outline" width="1.5em" height="1.5em" />
  </div>
);
const Blank = () => <svg className="h-6 w-6" />;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center justify-center hover:text-OrageText dark:hover:text-OrageText">
          <Menu.Button aria-label="Theme switcher">
            {mounted ? resolvedTheme === 'dark' ? <Moon /> : <Sun /> : <Blank />}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <RadioGroup value={theme} onChange={setTheme}>
              <div className="p-1">
                <RadioGroup.Option value="light">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`${
                          active ? 'bg-OrageText text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Sun />
                        </div>
                        Light
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
                <RadioGroup.Option value="dark">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`${
                          active ? 'bg-OrageText text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Moon />
                        </div>
                        Dark
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
                <RadioGroup.Option value="system">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`${
                          active ? 'bg-OrageText text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Monitor />
                        </div>
                        System
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSwitch;
