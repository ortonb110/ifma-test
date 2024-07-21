'use client'
import ThemeSwitch from "./ThemeSwitcher"
import Link from "next/link"
import logo from "@/app/assets/logo.png";
import arrowRight from "@/app/assets/arrow-right.svg";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const OpenMenuHandler = () => {
        setMenuOpen(prev => !prev)
    }

    useEffect(()=> {
        if(menuOpen){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

    return (
        <header className="text-[1.6rem] font-bold dark:text-gray-200/80 text-black/50 py-[2rem] bg-transparent backdrop-blur-[10px] fixed top-0 w-full px-[2rem] md:px-[12rem] lg:px-[32rem]">
            <nav>
                <ul className="flex items-center justify-between capitalize">
                    <li>
                        <Link href="/">
                            <Image src={logo} width={40} height={40} alt="Moviela Logo" />
                        </Link>
                    </li>
                    <li className="w-[400px] hidden md:block">
                        <ul className="flex item-center justify-between">
                            <li>
                                <Link href="/movies" className="hover:text-primary transition-colors ease-in-out duration-150">Movies</Link>
                            </li>
                            <li>
                                <Link href="/tv-shows" className="hover:text-primary transition-colors ease-in-out duration-150">tv shows</Link>
                            </li>
                            <li>
                                <Link href="/search" className="flex items-center gap-4 group">
                                    <span className="group-hover:text-primary transition-colors ease-in-out duration-150">search</span>
                                    <Image src={arrowRight} width={20} height={20} alt='' className="group-hover:translate-x-2 transition-transform ease-in-out duration-150" />
                                </Link>
                            </li>
                            <li className="my-auto">
                                <ThemeSwitch />
                            </li>

                        </ul>

                    </li>
                    <li className="block md:hidden">
                        <button onClick={OpenMenuHandler} className="dark:bg-secondary rounded-lg p-2 hover:bg-primary/30 dark:hover:bg-primary/30 transition-colors ease-in-out duration-150 group">
                            <RxHamburgerMenu className="dark:text-white/40 group-hover:text-white transition-colors ease-in-out duration-150 text-[2.5rem]" />
                        </button>
                    </li>
                    {
                        menuOpen && (
                            <div className="w-full bg-black/20 backdrop-blur-[10px] absolute top-0 left-0 h-[100vh] md:hidden">
                                <div className={`absolute h-[100vh] dark:text-white/30 text-white/80 ${menuOpen? 'app-drawer right-0' : 'app-drawer-close right-[-800px]'} top-0 bg-secondary w-[50%] p-[2rem]`}>
                                <div className="flex justify-end mb-[3rem]">
                                    <button onClick={OpenMenuHandler} className="dark:bg-secondary  rounded-lg p-2 hover:bg-primary/30 dark:hover:bg-primary/30 transition-colors ease-in-out duration-150 group">
                                        <IoClose className="dark:text-white/40 group-hover:text-white transition-colors ease-in-out duration-150 text-[2.5rem]" />
                                    </button>
                                </div>
                                <ul className="flex flex-col item-center space-y-4 text-[2.5rem]">
                                    <li>
                                        <Link href="/movies" className="hover:text-primary transition-colors ease-in-out duration-150">Movies</Link>
                                    </li>
                                    <li>
                                        <Link href="/tv-shows" className="hover:text-primary transition-colors ease-in-out duration-150">tv shows</Link>
                                    </li>
                                    <li>
                                        <Link href="/search" className="flex items-center gap-4 group">
                                            <span className="group-hover:text-primary transition-colors ease-in-out duration-150">search</span>
                                            <Image src={arrowRight} width={20} height={20} alt='' className="group-hover:translate-x-2 transition-transform ease-in-out duration-150" />
                                        </Link>
                                    </li>
                                    <li className="my-auto">
                                        <ThemeSwitch />
                                    </li>
                                </ul>
                            </div>
                            </div>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar