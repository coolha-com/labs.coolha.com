'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwap from "./ThemeSwap";
import { RiCloseLargeFill, RiMenuFill, RiMoonLine, RiSunLine, RiTranslate } from "react-icons/ri";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import LocaleModal from "@/app/gui/LocaleSwap";
export default function Header() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const t = useTranslations();
    return (
        <div className="min-w-80 w-screen bg-base-200 justify-around  z-50  flex  fixed top-0 left-0 right-0 transition-transform duration-300 px-2">
            <div className="navbar bg-base-200  max-w-screen-xl mx-auto  ">


                <div className="navbar-start">{/* 左 */}
                    <Link href={'/'} className="border-base-content">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Image src="/logo/头像LOGO图.png" alt="头像LOGO图.png" width={42} height={42} className=" rounded-full " />
                        </motion.div>
                    </Link>
                </div>

                {/* 手机隐藏navbar-center */}
                <div className="navbar-center hidden md:flex">{/* 中 */}
                    <ul className="menu menu-horizontal px-1 gap-4">
{/*                         <li><LinkNavbar href='/' Name={t('首页')} /></li>
                        <li><LinkNavbar href='/about' Name={t('关于')} /></li> */}
                        {/*                         <li>
                            <details className=" font-bold text-xl">
                                <summary>关于</summary>
                                <ul className=" w-32">
                                    <li><Link href="#about_us" >关于我们</Link ></li>
                                    <li><Link href="/contact_us" >联系我们</Link ></li>
                                    <li><Link href="/jobs" >加入我们</Link ></li>
                                    <li><Link href="/blog" >博客动态</Link ></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>

                {/* 按钮 */}
                <div className="navbar-end">{/* 右 */}

                    <LocaleModal />


{/*                     <div className="dropdown dropdown-end flex-row flex gap-2">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={1} role="button" className="md:hidden btn  btn-square btn-ghost rounded-full ">
                                <RiMenuFill className=" w-7 h-7 swap-off" />
                            </label>

                            <ul tabIndex={1} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><LinkNavbar href='/' Name={t('首页')} /></li>
                                <li><LinkNavbar href='/about' Name={t('关于')} /></li>
                            </ul>
                        </div>
                    </div> */}

                </div>


            </div>
        </div>
    )
}
function LinkNavbar({ href, Name }: any) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`header_link font-bold text-xl ${pathname === `${href}` ? "active" : ""
            }`}>
            {Name}
        </Link>
    )
}