'use client'

import { useTranslations } from "next-intl";

export default function E() {
  const t = useTranslations();


  return (
    <div className=" flex justify-center items-center">
      <div className=" py-24 sm:py-32 w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <h2 className="text-center text-lg font-semibold leading-8 text-primary">
            {t('合作与支持')}
          </h2>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">

          </div>

        </div>
       {/*  <img src="/logoimg/web3背景.png" alt="" className=" w-full h-auto"/> */}
      </div>
    </div>
  )
}