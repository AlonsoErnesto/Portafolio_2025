'use client';

import { Menu, RadioGroup, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import useLanguage from '@/hooks/useLanguage';

const EnglishIcon = () => <span className="text-lg font-bold">EN</span>;

const SpanishIcon = () => <span className="text-lg font-bold">ES</span>;

const Blank = () => <span className="h-6 w-6" />;

const LanguageSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, resolvedLanguage } = useLanguage();

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center justify-center hover:text-OrageText dark:hover:text-OrageText">
          <Menu.Button aria-label="Language switcher">
            {mounted ? resolvedLanguage === 'es' ? <SpanishIcon /> : <EnglishIcon /> : <Blank />}
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
            <RadioGroup value={language} onChange={setLanguage}>
              <div className="p-1">
                <RadioGroup.Option value="en">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-OrageText text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <EnglishIcon />
                        </div>
                        English
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
                <RadioGroup.Option value="es">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-OrageText text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <SpanishIcon />
                        </div>
                        Español
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

export default LanguageSwitch;
