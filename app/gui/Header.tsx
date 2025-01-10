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
                <div className="navbar-end">{/* 右 */}

                    <LocaleModal />


                    <div className="dropdown dropdown-end flex-row flex gap-2">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={1} role="button" className="md:hidden btn  btn-square btn-ghost rounded-full ">
                                <RiMenuFill className=" w-7 h-7 swap-off" />
                            </label>

                            <ul tabIndex={1} className="dropdown-content menu bg-base-100 rounded-box border gap-2 z-[1] min-w-72 max-w-96 p-2 shadow">
                                <li><LinkNavbar href='/' Name={t('首页')} /></li>
                                <LinkMenu />
                            </ul>
                        </div>
                    </div>

                </div>


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


function LinkMenu() {
    const t = useTranslations();
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const handleResize = () => setIsMdScreen(mediaQuery.matches);

        // 初始化时检查屏幕大小
        handleResize();

        // 添加监听器
        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDetailsElement>) => {
        if (isMdScreen) {
            event.currentTarget.setAttribute("open", "true");
        }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDetailsElement>) => {
        if (isMdScreen) {
            event.currentTarget.removeAttribute("open");
        }
    };

    return (
        <>

            <li>
                <details className="relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <summary className="cursor-pointer">{t("媒体")}</summary>
                    <ul className="w-52 bg-base-100 md:absolute md:top-7 md:left-0 md:border md:rounded-2xl md:shadow-lg md:z-10">
                        <div className="grid grid-flow-row grid-cols-3 gap-4 p-2">
                            <MediaLink />
                        </div>
                        <li><Link href="https://guild.xyz/coolha" target='_blank'>{t("公会")}↗</Link></li>
                        <li><Link href="https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1" target='_blank'>DAO↗</Link></li>
                    </ul>
                </details>
            </li>

            <li>
                <details className="relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <summary className="cursor-pointer">{t("业务")}</summary>
                    <ul className="w-56 bg-base-100 md:absolute md:top-7 md:left-0 md:border md:rounded-2xl md:shadow-lg md:z-10">
                        <li><Link href="https://coolha.com" target='_blank'>coolha.com ↗</Link></li>
                        <li><Link href="https://docs.coolha.com" target='_blank'>Docs ↗</Link></li>
{/*                         <li><Link href="https://business.coolha.com" className="link link-hover" target='_blank'>Business↗</Link ></li>
                        <li> <Link href="https://ads.coolha.com" className="link link-hover" target='_blank'>Ads↗</Link ></li>
                        <li> <Link href="https://shop.coolha.com" className="link link-hover" target='_blank'>Shop↗</Link ></li> */}
                    </ul>
                </details>
            </li>

            <li>
                <details className="relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <summary className="cursor-pointer">{t("关于")}</summary>
                    <ul className="w-56 bg-base-100 md:absolute md:top-7 md:left-0 md:border md:rounded-2xl md:shadow-lg md:z-10">
                        <li><Link href="/about_us">{t("关于我们")}</Link></li>
                        <li><Link href="mailto:ceo@coolha.com">{t("加入我们")}</Link></li>
                    </ul>
                </details>
            </li>

            <li>
                <details className="relative text-lg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <summary className="cursor-pointer">{t("法律")}</summary>
                    <ul className="w-56 bg-base-100 md:absolute md:top-7 md:left-0 md:border md:rounded-2xl md:shadow-lg md:z-10">
                        <li><Link href="/ipr">{t("知识产权")}</Link></li>
                        <li><Link href="/privacy">{t("隐私策略")}</Link></li>
                        <li><Link href="/terms">{t("使用条款")}</Link></li>
                    </ul>
                </details>
            </li>


        </>
    );
}
