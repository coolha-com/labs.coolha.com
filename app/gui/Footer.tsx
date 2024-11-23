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
                        <Link href="https://coolha.top" className="link link-hover" target='_blank'>coolha.top↗</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('服务')}</h6>
                        <Link href="/#教培" className="link link-hover">{t('教学培训')}</Link >
                        <Link href="/#咨询" className="link link-hover">{t('信息咨询')}</Link >
                        <Link href="/#开发" className="link link-hover">{t('开发软件')}</Link >
                        <Link href="/#电商" className="link link-hover">{t('抖音电商')}</Link >
                        <Link href="/#市场" className="link link-hover">{t('市场研究')}</Link >
                        <Link href="/#营销" className="link link-hover">{t('营销服务')}</Link >
                        <Link href="/#策划" className="link link-hover">{t('策划方案')}</Link >
                        <Link href="/#设计" className="link link-hover">{t('设计创意')}</Link >
                    </nav>
                    <nav>
                        <h6 className="footer-title">{t('关于')}</h6>
                        {/* <Link href="https://Coolhanet.feishu.cn/share/base/form/shrcnKgHyUU905ToaA3BzzW5ZMd" className="link link-hover" target='_blank'>{t('联系我们')}↗</Link >
                        <Link href="https://Coolhanet.feishu.cn/docx/NOEUdkurRohsFGxscUQcMQAznSh?from=from_copylink" className="link link-hover" target='_blank'>{t('加入我们')}↗</Link > */}
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

                        {/* <a href="https://beian.miit.gov.cn/" className="link link-hover flex flex-row gap-1" target='_blank'>
                            <img src='/工业和信息化部政务服务平台.png' alt='/工业和信息化部政务服务平台.png' className="w-4 h-4" />
                            {t('桂ICP备')}
                        </a> */}

                        {/*                         <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=**********" className="link link-hover gap-1 flex flex-row" target='_blank'>
                            <img src="/全国互联网安全管理服务平台.png" alt="全国互联网安全管理服务平台.png" className=" w-4 h-4" />
                            桂公安备********号
                        </a> */}
                    </div>

                </div>
            </div >


        </div >
    )
}