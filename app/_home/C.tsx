'use client'

import { useTranslations } from "next-intl";
import { FaBtc, FaEthereum, FaCommentsDollar, FaDonate } from "react-icons/fa";
import { RiAdvertisementLine, RiAlertLine, RiApps2Line, RiFunctionLine, RiFundsLine, RiNftLine } from "react-icons/ri";



export default function Example() {
  const t = useTranslations();
  const features = [
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
    <div id="about_us" className="bg-[base-100]  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <h1 className="text-xl text-center font-semibold leading-7 text-info">{t('案例场景')}</h1>

        <p className="text-2xl text-center font-semibold my-2">{t('为创作者和品牌赋能，数字增长新动力，Web3世界的营销服务')}</p>
        <div className="mx-auto max-w-2xl sm:mt-20 md:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 md:max-w-none md:grid-cols-2 lg:gap-y-8">
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
          </dl>
        </div>






      </div>
    </div>
  )
}
