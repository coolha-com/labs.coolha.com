'use client'
import { useTranslations } from "next-intl";
import Link from "next/link"
import { RiApps2Line, RiBarChart2Line, RiCodeBoxLine, RiGraduationCapLine, RiLineChartLine, RiListCheck3, RiQuestionAnswerLine, RiShapeFill, RiShoppingBag4Line } from "react-icons/ri";




export default function Example() {
  const t = useTranslations();
  const people = [
    {
      href: '/products/#coolha.com',
      title: 'coolha.com',
    },
    {
      href: '/products/#Qiancset',
      title: 'Qiancset',
    },
    {
      href: '/products/#开发',
      title: t('开发'),
    },
    {
      href: '/products/#市场',
      title: t('市场'),
    },
    {
      href: '/products/#营销',
      title: t('营销'),
    },
    {
      href: '/products/#策划',
      title: t('策划'),
    },
  ]
  return (
    <div className="bg-[base-100] py-24 sm:py-32 ">
      <div className="mx-auto max-w-4xl   px-6 lg:px-8">


        <h1 className="text-xl font-semibold leading-7 text-info text-center">{t('产品服务')}</h1>




        <div className=" flex justify-evenly items-center md:flex-row flex-col  gap-8">

          <div id='coolha.com' className="card card-compact bg-base-100 shadow-xl border w-full max-w-96 h-auto mt-4">
            <figure><img src='/img/coolhatop.png' alt='coolhatop' className=" w-full h-auto" /></figure>
            <div className="card-body border-t ">
              <h2 className="card-title">coolha.com</h2>
              <p>{t('基于Lens协议开发的去中心化社交应用')}, {t('开发中仅测试用')}</p>
              <div className="card-actions justify-end">
                <Link href='https://coolha.com' className="btn btn-primary hover:text-secondary text-lg" target='_blank'>{t('前往')}↗</Link>
              </div>
            </div>
          </div>

          {/*               <div id='Qiancset' className="card card-compact bg-base-100 shadow-xl border w-full max-w-96 h-auto mt-4">
                <figure><img src='/img/qiancset.png' alt='Qiancset' className="w-full h-auto" /></figure>
                <div className="card-body border-t break-words text-wrap ">
                  <h2 className="card-title">Qiancset</h2>
                  <p>{t('去中心化的房屋租赁服务应用')}, {t('域名过期')}</p>
                  <div className="card-actions justify-end">
                    <Link href='/products#Qiancset' className="btn btn-primary btn-disabled hover:text-secondary text-lg" target='_blank'>{t('敬请期待')}</Link>
                  </div>
                </div>
              </div> */}

        </div>


        <div className=" md:grid grid-cols-2 gap-8 flex sm:flex-row flex-col  mt-12">

          <Cord logo={<RiCodeBoxLine />} name={t('开发')} text={t('DAPP、前端网站、EVM智能合约solidify、UI/UX设计、产品架构，区块链应用技术')} />

          <Cord logo={<RiBarChart2Line />} name={t('市场')} text={t('市场研究报告,数据分析,技术研究文章等')} />
          <Cord logo={<RiLineChartLine />} name={t('营销')} text={t('广告流量,NFT营销方案等技术,为创作者和企业提供创收方案')} />

          <Cord logo={<RiListCheck3 />} name={t('策划')} text={t('Web3商业模式研究，为您提供市场研究、营销策划方案、内容创意、品牌策划、企业形象设计等')} />
        </div>

        <div className="text-xl font-semibold leading-7 text-info text-center py-12">        <Link role="button" className="btn btn-primary   hover:text-[#3f1de7] text-xl md:text-2xl font-bold rounded-full " href={'mailto:email@coolha.com'}>{t('联系我们')} ↗</Link></div>






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