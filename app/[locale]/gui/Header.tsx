'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LocaleModal from "@/app/[locale]/gui/LocaleSwap";


export default function Header() {
    return (
        <div className="min-w-80  bg-base-200 justify-around  z-50  flex  left-0 right-0 transition-transform duration-300 px-2">
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
                    {/*                     <ul className="menu menu-horizontal px-1 gap-4">
                        <li><LinkNavbar href='/' Name={t('首页')} /></li>
                        <LinkMenu />
                    </ul> */}
                </div>

                {/* 按钮 */}
                <div className="navbar-end">

                    <LocaleModal />


                    {/*                     <div className="dropdown dropdown-end flex-row flex gap-2">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={1} role="button" className="md:hidden btn  btn-square btn-ghost rounded-full ">
                                <RiMenuFill className=" w-7 h-7 swap-off" />
                            </label>

                            <ul tabIndex={1} className="dropdown-content menu bg-base-100 rounded-box border gap-2 z-[1] min-w-72 max-w-96 p-2 shadow">
                                <li><LinkNavbar href='/' Name={t('首页')} /></li>
                                <LinkMenu />
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
        <Link href={href} className={`header_link text-lg ${pathname === `${href}` ? "active" : ""
            }`}>
            {Name}
        </Link>
    )
}


