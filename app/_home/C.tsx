'use client'

import { useTranslations } from "next-intl";
import { FaBtc, FaEthereum, FaCommentsDollar, FaDonate } from "react-icons/fa";
import { RiAdvertisementLine, RiAlertLine, RiApps2Line, RiFunctionLine, RiFundsLine, RiNftLine } from "react-icons/ri";



export default function Example() {
  const t = useTranslations();

  return (
    <div id="about_us" className="bg-[base-100]  ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">




        <div className=" flex justify-evenly items-center md:flex-row flex-col  gap-8">

          <div id='coolha.com' className="card card-compact bg-base-100 shadow-xl border w-full max-w-96 h-auto mt-4">
            <figure><img src='favicon.ico' alt='coolha' className=" w-full h-auto" /></figure>
            <div className="card-body border-t ">
              <h2 className="card-title">coolha.com</h2>
              <p>{t('基于Lens协议开发的去中心化社交应用')}, {t('开发中仅测试用')}</p>
{/*               <div className="card-actions justify-end">
                <Link href='https://coolha.com' className="btn btn-primary hover:text-secondary text-2xl" target='_blank'>{t('前往')}↗</Link>
              </div> */}
            </div>
          </div>

        </div>





        <section className="py-20">
        <div className=" mx-auto px-4">
          <h3 className="text-3xl font-bold text-center  mb-12">{t('为什么选择')} coolha.com?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#111111] p-6 rounded-2xl border hover:border-primary ">
              <h4 className="text-xl font-semibold mb-2">{t('去中心化身份')}</h4>
              <p className="text-white">{t('使用区块链技术拥有和控制您的数字身份')}</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-2xl border hover:border-primary ">
              <h4 className="text-xl font-semibold  mb-2">{t('安全消息传递')}</h4>
              <p className="text-white">{t('使用 XMTP 构建安全、私密和可移植的消息传递')}</p>
            </div>
            <div className="bg-[#111111] p-6 rounded-2xl border hover:border-primary ">
              <h4 className="text-xl font-semibold  mb-2">{t('去中心化治理')}</h4>
              <p className=" text-white">{t('用户参与共同治理,不要因为中心组织过度控制而丧失活力')}</p>
            </div>

          </div>
        </div>
      </section>



      </div>
    </div>
  )
}
