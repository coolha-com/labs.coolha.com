'use client'

import Link from "next/link"

export default function C() {
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-[base-100] py-12">


{/*         <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-8">
                <dt className="text-base leading-7 ">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-info sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}



      </div>
    </div>
  )
}
const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '88 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '86,000' },
]
