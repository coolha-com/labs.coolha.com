'use client'
import Link from "next/link";
import MediaLink from "./MediaLink";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations();
    return (
        <div className="bg-base-200">


            <div className="flex justify-center ">
                <footer className="footer  max-w-screen-xl p-6 lg:p-8  text-base-content">
                    <aside>
                        <Link href={`/`} className="">
                            <img src="/logo/透明LOGO绿色.png" alt="/logo/透明LOGO绿色.png" className="max-w-32 " />
                        </Link>
                    </aside>
                    <nav>
                        <h6 className="footer-title">{t('媒体')}</h6>
                        <div className="grid grid-flow-row grid-cols-3 gap-4 py-2">
                            <MediaLink />
                        </div>
                        <Link href="https://guild.xyz/coolha" target='_blank'>{t("公会")}↗</Link>
                        <Link href="https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1" target='_blank'>DAO↗</Link>
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('业务')}</h6>
                        <Link href="https://coolha.com" className="link link-hover" target='_blank'>coolha.com↗</Link >
                        <Link href="https://docs.coolha.com" className="link link-hover" target='_blank'>Docs↗</Link >
{/*                         <Link href="https://business.coolha.com" className="link link-hover" target='_blank'>Business↗</Link >
                        <Link href="https://ads.coolha.com" className="link link-hover" target='_blank'>Ads↗</Link >
                        <Link href="https://shop.coolha.com" className="link link-hover" target='_blank'>Shop↗</Link > */}
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('关于')}</h6>
                        <Link href="/about_us" className="link link-hover">{t('关于我们')}</Link >
                        <Link href="mailto:ceo@coolha.com" className="link link-hover" target='_blank'>{t('加入我们')}</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('法律')}</h6>
                        <Link href="/ipr" className="link link-hover">{t('知识产权')}</Link >
                        <Link href="/privacy" className="link link-hover">{t('隐私策略')}</Link >
                        <Link href="/terms" className="link link-hover">{t('使用条款')}</Link >
                    </nav>
                </footer>
            </div>
            <div className="flex justify-center border-t bg-base-200 text-base-content border-base-300 ">
                <div className=" footer max-w-screen-xl px-6 lg:px-8 py-4">
                    <div className="place-self-start md:place-self-center text-gray-400 flex flex-col md:flex-row gap-2">
                        <p className="flex flex-col gap-1 md:flex-row"><span> © 2024 coolha.com All rights reserved.</span></p>
                    </div>

                </div>
            </div >


        </div >
    )
}