import ThemeSwitch from "./ThemeSwitcher"
import Link from "next/link"
import logo from "@/app/assets/logo.png";
import arrowRight from "@/app/assets/arrow-right.svg";
import Image from "next/image";


const NavigationBar = () => {
  return (
    <header className="text-[1.6rem] font-bold dark:text-gray-200/80 text-black/50 py-[2rem] bg-transparent backdrop-blur-[10px] fixed top-0 w-full main-content">
              <nav>
                <ul className="flex items-center justify-between capitalize">
                  <li>
                    <Link href="/">
                      <Image src={logo} width={40} height={40} alt="Moviela Logo" />
                    </Link>
                  </li>
                  <li className="w-[400px]">
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
                          <Image src={arrowRight} width={20} height={20} alt='' className="group-hover:translate-x-2 transition-transform ease-in-out duration-150"/>
                        </Link>
                      </li>
                      <li className="my-auto">
                        <ThemeSwitch />
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </header>
  )
}

export default NavigationBar