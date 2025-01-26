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
import { useState, useEffect } from "react";
import MediaLink from "./MediaLink";


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
                            <Image src="/logo/透明LOGO绿色.png" alt="透明LOGO绿色.png" width={42} height={42} className=" rounded-full " />
                        </motion.div>
                    </Link>
                </div>

                {/* 手机隐藏navbar-center */}
                <div className="navbar-center hidden md:flex">{/* 中 */}
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><LinkNavbar href='/' Name={t('首页')} /></li>
                        <LinkMenu />
                    </ul>
                </div>

                {/* 按钮 */}
                <div className="navbar-end">

                    <LocaleModal />

            </div>
        </div>
    )
}

function LinkNavbar({ href, Name }: any) {
    const pathname = usePathname();
    return (
        <Link href={href} className={`header_link text-lg ${pathname === `${href}` ? "active" : ""
            }`}>
            {Name}
        </Link>
    )
}


