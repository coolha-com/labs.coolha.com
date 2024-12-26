'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaBtc, FaEthereum, FaCommentsDollar, FaDonate } from "react-icons/fa";

export default function page() {
    const t = useTranslations();
    const features = [
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
    return (
        <div id='about' className="flex flex-col justify-center items-center">
            <div className="bg-[base-100] py-24 sm:py-32 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">



                    <div className="mx-auto  lg:text-center">

                        <h1 className=" text-center text-xl text-info font-semibold leading-7 ">{t('关于我们')}</h1>
                        {/*                         <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                            {t('我们来自用户，既是构建者，也是拥有者')}
                        </p> */}
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



                    <div className="mx-auto  max-w-2xl my-20 md:max-w-4xl">
                        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-8">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-20 shadow-md p-6  rounded-2xl border bg-base-200 hover:bg-[var(--navlink-color)] ">
                                    <dt className=" text-2xl font-semibold leading-7 text-primary">
                                        <div className="absolute left-5 top-7 flex h-10 w-10 items-start  rounded-2xl ">
                                            <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-xl leading-7 text-white">{feature.description}</dd>
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




                </div>
            </div>
        </div>
    )
}