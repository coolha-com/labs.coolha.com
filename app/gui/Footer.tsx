'use client'
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations();
    return (
        <div className="bg-base-200">

            <footer className="footer footer-center bg-base-200 text-base-content rounded  px-6 lg:px-8 py-4 gap-3">
{/*                 <nav className="grid grid-flow-col gap-4">
                    <Link href="/ipr" className="link link-hover">{t('知识产权')}</Link >
                    <Link href="/privacy" className="link link-hover">{t('隐私策略')}</Link >
                    <Link href="/terms" className="link link-hover">{t('使用条款')}</Link >
                </nav> */}

                <aside>
                    <p className="text-gray-400">Copyright © {new Date().getFullYear()} - All right reserved by Coolha Labs</p>
                </aside>
            </footer>

        </div >
    )
}