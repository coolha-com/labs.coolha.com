'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaBtc, FaEthereum, FaCommentsDollar, FaDonate } from "react-icons/fa";
import { RiCodeBoxLine, RiBarChart2Line, RiLineChartLine, RiListCheck3, RiAdvertisementLine, RiApps2Line, RiFundsLine, RiNftLine } from "react-icons/ri";

export default function page() {
    const t = useTranslations();
    const Idea = [
        {
            name: t('使命'),
            description: t('为推动互联网进步和世界文明进步，创造激动人心的产品服务，让世界变得更好'),
            icon: FaBtc,
        },
        {
            name: t('愿景'),
            description: t('让数据信息可拥有、可信任、有价值'),
            icon: FaEthereum,
        },
        {
            name: t('价值观'),
            description: t('始终以用户为核心，不希望利益化和过度金融化，所有权益公平'),
            icon: FaCommentsDollar,
        },
        {
            name: t('技术创新'),
            description: t('致力于不断探索和应用前沿技术,提供更好的Web3产品和服务解决方案。'),
            icon: FaDonate,
        },
    ]
    const Case = [
        {
            name: t('数字营销方案'),
            description: t('基于区块链技术发行数字资产，增强品牌忠诚度和创造独特价值，为用户和品牌建立更紧密的联系'),
            icon: RiNftLine,
        },
        {
            name: t('Web3应用场景落地'),
            description: t('Dapp开发，链上智能合约开发，web3项目网站。结合业务场景需求，定制开发'),
            icon: RiApps2Line,
        },
        {
            name: t('曝光和增长'),
            description: t('平台垂直广告，精准营销。为品牌调研和内容策划，增强消费者和粉丝粘性。'),
            icon: RiAdvertisementLine,
        },
        {
            name: t('品牌建设与推广'),
            description: t('策划品牌活动，品牌推广策略，品牌形象设计'),
            icon: RiFundsLine,
        },
    ]
    return (
        <div id='about' className="flex flex-col justify-center items-center">
            <div className="bg-[base-100] py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">



                    <div className="mx-auto  lg:text-center">

                        <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                            {t('让数据信息可拥有、可信任、有价值')}
                        </p>
                        <p className="mt-6 text-xl leading-8 text-[#6a6a6a]">
                            {t('Coolha / 酷哈工作室')}
                            <br />
                            {t('希望通过技术改变生产关系，为世界文明进步做贡献，让世界变得更好')}
                            <br />
                            {t('相信Web3和区块链发展至今不仅仅是技术和互联网进步，更是一种能延伸到各领域的积极理念')}
                            <br />
                            {t('公共区块链是世界大同、世界人民大团结、民主治理、解决信任的一项重要技术。')}
                        </p>
                    </div>


                    {/* 理念 */}
                    <div className="mx-auto  max-w-2xl my-20 md:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-8">
                            {Idea.map((idea) => (
                                <div key={idea.name} className="relative pl-20 shadow-md p-6  rounded-2xl border bg-base-200 hover:bg-[var(--navlink-color)] ">
                                    <dt className=" text-2xl font-semibold leading-7 text-primary">
                                        <div className="absolute left-5 top-7 flex h-10 w-10 items-start  rounded-2xl ">
                                            <idea.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                        </div>
                                        {idea.name}
                                    </dt>
                                    <dd className="mt-2 text-xl leading-7 text-white">{idea.description}</dd>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <Link
                            role="button"
                            className="  btn btn-primary   hover:text-[#3f1de7] text-xl  font-bold rounded-full "
                            href={'mailto:ceo@coolha.com'}
                            target='_blank'
                        >
                            {t('加入我们')} ↗
                        </Link>
                    </div>

                    {/* 业务 */}
                    <p className="mt-24 text-3xl text-center font-bold tracking-tight  sm:text-4xl">
                        {t('业务')}
                    </p>
                    <div className="mx-auto  max-w-2xl  md:max-w-4xl md:grid grid-cols-2 gap-8 flex sm:flex-row flex-col pt-24">
                        <Cord logo={<RiCodeBoxLine />} name={t('开发')} text={t('DAPP、前端网站、EVM智能合约solidify、UI/UX设计、产品架构，区块链应用技术')} />
                        <Cord logo={<RiBarChart2Line />} name={t('市场')} text={t('市场研究报告,数据分析,技术研究文章等')} />
                        <Cord logo={<RiLineChartLine />} name={t('营销')} text={t('广告流量,NFT营销方案等技术,为创作者和企业提供创收方案')} />
                        <Cord logo={<RiListCheck3 />} name={t('策划')} text={t('Web3商业模式研究，为您提供市场研究、营销策划方案、内容创意、品牌策划、企业形象设计等')} />
                    </div>

                    {/* 案例 */}
                    <div className="mx-auto max-w-2xl sm:mt-20 md:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-8">
                            {Case.map((cases) => (
                                <div key={cases.name} className="relative pl-20 shadow-md p-6  rounded-2xl border bg-base-200 hover:bg-[var(--navlink-color)] ">
                                    <dt className=" text-2xl font-semibold leading-7 text-primary">
                                        <div className="absolute left-5 top-7 flex h-10 w-10 items-start  rounded-2xl ">
                                            <cases.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                        </div>
                                        {cases.name}
                                    </dt>
                                    <dd className="mt-2 text-xl leading-7 text-white">{cases.description}</dd>
                                </div>
                            ))}
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}

function Cord({ logo, name, text, href }: any) {
    const t = useTranslations();
    return (
        <div id={name} className="rounded-2xl relative  shadow-md bg-base-200 border h-auto p-6 pl-20 hover:bg-[var(--navlink-color)]">
            <dt className=" text-2xl font-semibold leading-7 text-primary">
                <div className="absolute left-5 top-7 flex h-10 w-10 items-start  rounded-2xl ">
                    <div className="h-6 w-6 text-primary" aria-hidden="true" >{logo}</div>
                </div>
                {name}
            </dt>
            <dd className="mt-2 text-xl leading-7 text-white">{text}</dd>
        </div>
    )
}

