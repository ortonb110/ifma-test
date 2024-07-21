'use client';
import ThemeSwitch from './ThemeSwitcher';
import Link from 'next/link';
import logo from '@/app/assets/logo.png';
import arrowRight from '@/app/assets/arrow-right.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';



const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const OpenMenuHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 z-[10000] w-full bg-transparent px-[2rem] py-[2rem] text-[1.6rem] font-bold text-black/50 backdrop-blur-[10px] dark:text-gray-200/80 md:px-[5rem] xl:px-[15rem] 2xl:px-[25rem]">
      <nav>
        <ul className="flex items-center justify-between capitalize">
          <li>
            <Link href="/">
              <Image src={logo} width={40} height={40} alt="Moviela Logo" />
            </Link>
          </li>
          <li className="hidden w-[400px] md:block">
            <ul className="item-center flex justify-between">
              <li>
                <Link
                  href="/movies"
                  className="transition-colors duration-150 ease-in-out hover:text-primary"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/tv-shows"
                  className="transition-colors duration-150 ease-in-out hover:text-primary"
                >
                  tv shows
                </Link>
              </li>
              <li>
                <Link href="/search" className="group flex items-center gap-4">
                  <span className="transition-colors duration-150 ease-in-out group-hover:text-primary">
                    search
                  </span>
                  <Image
                    src={arrowRight}
                    width={20}
                    height={20}
                    alt=""
                    className="transition-transform duration-150 ease-in-out group-hover:translate-x-2"
                  />
                </Link>
              </li>
              <li className="my-auto">
                <ThemeSwitch />
              </li>
            </ul>
          </li>
          <li className="block md:hidden">
            <button
              onClick={OpenMenuHandler}
              className="group rounded-lg p-2 transition-colors duration-150 ease-in-out hover:bg-primary/30 dark:bg-secondary dark:hover:bg-primary/30"
            >
              <RxHamburgerMenu className="text-[2.5rem] transition-colors duration-150 ease-in-out group-hover:text-white dark:text-white/40" />
            </button>
          </li>
          {menuOpen && (
            <div className="absolute left-0 top-0 h-[100vh] w-full bg-black/20 backdrop-blur-[10px] md:hidden">
              <div
                className={`absolute h-[100vh] text-white/80 dark:text-white/30 ${menuOpen ? 'app-drawer right-0' : 'app-drawer-close right-[-800px]'} top-0 w-[50%] bg-secondary p-[2rem]`}
              >
                <div className="mb-[3rem] flex justify-end">
                  <button
                    onClick={OpenMenuHandler}
                    className="group rounded-lg p-2 transition-colors duration-150 ease-in-out hover:bg-primary/30 dark:bg-secondary dark:hover:bg-primary/30"
                  >
                    <IoClose className="text-[2.5rem] transition-colors duration-150 ease-in-out group-hover:text-white dark:text-white/40" />
                  </button>
                </div>
                <ul className="item-center flex flex-col space-y-4 text-[2.5rem]">
                  <li>
                    <Link
                      href="/movies"
                      className="transition-colors duration-150 ease-in-out hover:text-primary"
                    >
                      Movies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tv-shows"
                      className="transition-colors duration-150 ease-in-out hover:text-primary"
                    >
                      tv shows
                    </Link>
                  </li>
                  <li>
                    <Link href="/search" className="group flex items-center gap-4">
                      <span className="transition-colors duration-150 ease-in-out group-hover:text-primary">
                        search
                      </span>
                      <Image
                        src={arrowRight}
                        width={20}
                        height={20}
                        alt=""
                        className="transition-transform duration-150 ease-in-out group-hover:translate-x-2"
                      />
                    </Link>
                  </li>
                  <li className="my-auto">
                    <ThemeSwitch />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
