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
                        <img src="/logo/透明LOGO绿色.png" alt="/logo/透明LOGO绿色.png" className="max-w-32 " />
                        <div className="place-self-center pt-8">
                            <div className="grid grid-flow-col gap-4">
                                <MediaLink />
                            </div>
                        </div>
                    </aside>

                    <nav>
                        <h6 className="footer-title">{t('产品')}</h6>
                        <Link href="https://coolha.com" className="link link-hover" target='_blank'>coolha.com↗</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('服务')}</h6>
                        <Link href="/about_us/#开发" className="link link-hover">{t('开发软件')}</Link >
                        <Link href="/about_us/#市场" className="link link-hover">{t('市场研究')}</Link >
                        <Link href="/about_us/#营销" className="link link-hover">{t('营销服务')}</Link >
                        <Link href="/about_us/#策划" className="link link-hover">{t('策划方案')}</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('关于')}</h6>
                        <Link href="/about_us" className="link link-hover">{t('关于我们')}</Link >
                        <Link href="mailto:ceo@coolha.com" className="link link-hover" target='_blank'>{t('加入我们')}</Link >
                        <Link href="https://link3.to/coolha" className="link link-hover" target='_blank'>{t('联系我们')}</Link >
                        <Link href="https://mirror.xyz/0xF3D7De68985AB5e92841CE7bC335cFe0c04CAb4A" className="link link-hover" target='_blank'>{t('博客')}↗</Link >
                        <Link href="https://guild.xyz/coolha" className="link link-hover" target='_blank'>{t('公会')}↗</Link >
                        <Link href="https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1" className="link link-hover" target='_blank'>{t('DAO')}↗</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('法律')}</h6>
                        <Link href="/br" className="link link-hover">{t('品牌资产')}</Link >
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