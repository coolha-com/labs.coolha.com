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
                        <li><LinkNavbar href='/' Name={t('首页')} /></li>
                        <li><details className=" text-lg">
                            <summary>{t('业务')}</summary>
                            <ul className=" w-32 lg:w-56 border">
                                <li><Link href="/#开发" >{t('开发软件')}</Link ></li>
                                <li><Link href="/#市场" >{t('市场研究')}</Link ></li>
                                <li><Link href="/#营销" >{t('营销服务')}</Link ></li>
                                <li><Link href="/#策划" >{t('策划方案')}</Link ></li>
                            </ul>
                        </details></li>
                        <li><details className=" text-lg">
                            <summary>{t('关于')}</summary>
                            <ul className=" w-32 lg:w-56 border">
                                <li><Link href="mailto:cs@coolha.com" >{t('联系我们')}</Link ></li>
                                <li><Link href="mailto:ceo@coolha.com" >{t('加入我们')}</Link ></li>
                                <li><Link href="https://mirror.xyz/0xF3D7De68985AB5e92841CE7bC335cFe0c04CAb4A" >{t('博客')}↗</Link ></li>
                                <li><Link href="https://guild.xyz/coolha" >{t('公会')}↗</Link ></li>
                                <li><Link href="https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1" >{t('DAO')}↗</Link ></li>
                            </ul>
                        </details></li>
                        <li> <details className=" text-lg">
                            <summary>{t('法律')}</summary>
                            <ul className=" w-32 lg:w-56 border">
                                <li><Link href="/br" >{t('品牌资产')}</Link ></li>
                                <li><Link href="/ipr" >{t('知识产权')}</Link ></li>
                                <li><Link href="/privacy" >{t('隐私策略')}</Link ></li>
                                <li><Link href="/terms" >{t('使用条款')}</Link ></li>
                            </ul>
                        </details> </li>
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
                                <li><details className=" text-lg">
                                    <summary>{t('业务')}</summary>
                                    <ul className=" w-52 ">
                                        <li><Link href="/#开发" >{t('开发软件')}</Link ></li>
                                        <li><Link href="/#市场" >{t('市场研究')}</Link ></li>
                                        <li><Link href="/#营销" >{t('营销服务')}</Link ></li>
                                        <li><Link href="/#策划" >{t('策划方案')}</Link ></li>
                                    </ul>
                                </details></li>
                                <li><details className=" text-lg">
                                    <summary>{t('关于')}</summary>
                                    <ul className=" w-52 ">
                                        <li><Link href="mailto:cs@coolha.com" >{t('联系我们')}</Link ></li>
                                        <li><Link href="mailto:ceo@coolha.com" >{t('加入我们')}</Link ></li>
                                        <li><Link href="https://mirror.xyz/0xF3D7De68985AB5e92841CE7bC335cFe0c04CAb4A" >{t('博客')}↗</Link ></li>
                                        <li><Link href="https://guild.xyz/coolha" >{t('公会')}↗</Link ></li>
                                        <li><Link href="https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1" >{t('DAO')}↗</Link ></li>
                                    </ul>
                                </details></li>
                                <li>  <details className=" text-lg">
                                    <summary>{t('法律')}</summary>
                                    <ul className=" w-52 ">
                                        <li><Link href="/br" >{t('品牌资产')}</Link ></li>
                                        <li><Link href="/ipr" >{t('知识产权')}</Link ></li>
                                        <li><Link href="/privacy" >{t('隐私策略')}</Link ></li>
                                        <li><Link href="/terms" >{t('使用条款')}</Link ></li>
                                    </ul>
                                </details></li>
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