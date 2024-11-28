'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify-icon/react';
import projectsData from '@/data/projectsData';
import skillsData from '@/data/skillsData';
import useLanguage from './hooks/useLanguage';
import experiencesData from '@/data/experienceData';
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';

export default function GridLayout({ children }: { children: React.ReactNode }) {
  const { resolvedLanguage } = useLanguage();
  const [btnShowNav, setBtnShowNav] = useState<boolean>(false);
  const maxWidth768 = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const toggleNav = () => {
    if (maxWidth768) {
      setBtnShowNav((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!maxWidth768) {
      setBtnShowNav(false);
    }
  }, [maxWidth768]);

  const pathname = usePathname();
  const idPr = pathname?.match(/\/projects\/([^/]+)/)?.[1] || 1;
  const idEx = pathname?.match(/\/experience\/([^/]+)/)?.[1] || 1;
  const idSk = pathname?.match(/\/skills\/([^/]+)/)?.[1] || 1;
  return (
    <div className="relative h-[100vh] w-full text-[16px] p-3 dark:text-customGray text-gray-950  ">
      <div className="flex h-full w-full">
        {maxWidth768 && (
          <button
            type="button"
            className="absolute w-auto py-1 px-3 right-1 top-1 z-40 bg-white border border-black dark:bg-bgPrimary  dark:border-white "
            onClick={toggleNav}
          >
            {btnShowNav ? 'MENU' : 'X'}
          </button>
        )}
        <div
          className={`${btnShowNav && 'hidden'} ${
            maxWidth768
              ? 'w-[50vh] absolute bg-white dark:backdrop-blur-3xl dark:bg-bgPrimary/60 right-0 h-[95vh] overflow-y-scroll z-30 pr-3'
              : 'w-[35%] grid grid-rows-10 grid-flow-col'
          }`}
        >
          <div className="col-span-3 p-2 row-span-1">
            <Link href="/" onClick={toggleNav}>
              <div
                className={`relative w-full h-full border-gray-950 border-[1px] ${pathname === '/' ? 'dark:border-bluecleare' : 'dark:border-gray-500'}`}
              >
                <div className=" relative">
                  <span
                    className={`absolute z-10 -top-3 left-2 h-1  px-2  ${pathname === '/' && 'dark:text-bluecleare'}`}
                  >
                    Home
                    <div className="-z-10 absolute top-[9.5px] w-[73%] h-1 dark:bg-bgPrimary bg-white"></div>
                  </span>
                </div>
                <div className="w-full h-full grid place-content-center pl-2 pt-[2px] text-[14.3px] overflow-y-scroll max-w-1195:pt-7 max-w-768:pt-1">
                  {resolvedLanguage === 'en' ? (
                    <p className=" line-clamp -2 leading-4 z-10 h-auto w-[95%]">
                      Hello, I'm <span className="text-BlueText">Ernesto Alonso</span>, a passionate
                      software engineer from Perú.
                    </p>
                  ) : (
                    <p className=" line-clamp -2 leading-4 z-10 h-auto w-[95%]">
                      Hola, Soy <span className="text-BlueText">Ernesto Alonso</span>, apasionado en
                      el desarrollo de software en Perú.
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-3 p-2 row-span-3">
            <div
              className={`relative w-full h-full border-gray-950 border-[1px] ${pathname?.startsWith('/experience/') ? 'dark:border-bluecleare' : 'dark:border-gray-500'}`}
            >
              <div className=" relative">
                <span
                  className={`absolute z-10 -top-3 left-2 h-1  px-2  ${pathname?.startsWith('/experience/') && 'dark:text-bluecleare'}`}
                >
                  Experience
                  <div className="-z-10 absolute top-[9.5px] w-[86%] h-1 dark:bg-bgPrimary bg-white"></div>
                </span>
              </div>
              <div className="relative h-full flex-grow pt-3 overflow-y-scroll">
                {experiencesData.map((exp) => (
                  <Link key={exp.id} href={`/experience/${exp.id}`} onClick={toggleNav}>
                    <div
                      className={` flex flex-row pl-1 gap-3 ${pathname === `/experience/${exp.id}` ? 'bg-selectBtn' : 'hover:bg-hoverBtn text-white hover:text-white'}`}
                    >
                      <div
                        className={`w-[50%] text-wrap flex items-center leading-[19px] text-black  ${pathname === `/experience/${exp.id}` ? 'text-gray-300' : 'hover:text-white'} dark:text-customGray`}
                      >
                        {exp.position}
                      </div>
                      <div className="flex flex-row items-center gap-3 w-[50%] relative h-auto break-words">
                        @ <span className="text-wrap text-orange-400 ">{exp.title}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <span
                className={`absolute -bottom-3 right-1 dark:bg-bgPrimary bg-white px-2 ${pathname?.startsWith('/experience/') ? 'dark:text-bluecleare' : 'dark:border-gray-500'}`}
              >
                {idEx} of {experiencesData.length}
              </span>
            </div>
          </div>
          <div className="col-span-3 p-2 row-span-3">
            <div
              className={`relative w-full h-full border-gray-950 border-[1px] ${pathname?.startsWith('/projects') ? 'dark:border-bluecleare' : 'dark:border-gray-500'}`}
            >
              <div className=" relative">
                <span
                  className={`absolute z-10 -top-3 left-2 h-1  px-2  ${pathname?.startsWith('/projects/') && 'dark:text-bluecleare'}`}
                >
                  Projects
                  <div className="-z-10 absolute top-[10px] w-[83%] h-1 dark:bg-bgPrimary bg-white"></div>
                </span>
              </div>
              <div className="relative h-full flex-grow pt-3 overflow-y-scroll">
                {projectsData.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`} onClick={toggleNav}>
                    <p
                      className={` pl-3 gap-0 text-black dark:text-customGray
                      ${pathname === `/projects/${project.id}` ? 'bg-selectBtn text-gray-300' : 'hover:bg-hoverBtn hover:text-white'}`}
                    >
                      {project.title}
                    </p>
                  </Link>
                ))}
              </div>
              <span
                className={`absolute -bottom-3 right-1 dark:bg-bgPrimary bg-white px-2 ${pathname?.startsWith('/projects/') && 'dark:text-bluecleare'}`}
              >
                {idPr} of {projectsData.length}
              </span>
            </div>
          </div>
          <div className="col-span-3 p-2 row-span-3">
            <div
              className={`relative w-full h-full border-gray-950 border-[1px] ${pathname?.startsWith('/skills') ? 'dark:border-bluecleare' : 'dark:border-gray-500'}`}
            >
              <div className=" relative">
                <span
                  className={`absolute z-10 -top-3 left-2 h-1  px-2  ${pathname?.startsWith('/skills/') && 'dark:text-bluecleare'}`}
                >
                  Skills - Tools
                  <div className="-z-10 absolute top-[9px] w-[89%] h-1 dark:bg-bgPrimary bg-white"></div>
                </span>
              </div>
              <div className="relative h-full flex-grow pt-3 overflow-y-scroll">
                {skillsData.map((skill) => (
                  <div key={skill.id}>
                    <Link
                      onClick={toggleNav}
                      href={`/skills/${skill.id}`}
                      className={`flex items-center pl-2 ${pathname === `/skills/${skill.id}` ? 'bg-selectBtn text-gray-300' : 'hover:bg-hoverBtn hover:text-white'}`}
                    >
                      <Icon icon={skill.icon} width="1.2em" height="1em" />
                      <p className=" flex pl-2 gap-0  dark:text-customGray">{skill.title}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <span
                className={`absolute -bottom-3 right-1 dark:bg-bgPrimary bg-white px-2 ${pathname?.startsWith('/skills/') && 'dark:text-bluecleare'}`}
              >
                {idSk} of {skillsData.length}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[100%] p-2  overflow-hidden">
          <div className="relative w-full h-full dark:border-gray-500 border-gray-950 border-[1px]">
            <span className="dark:bg-bgPrimary bg-white relative">{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
