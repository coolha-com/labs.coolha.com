'use client'
import Image from 'next/image'
import 头像LOGO图 from '@/public/logo/头像LOGO图.png'
import 头像LOGO黑底图 from '@/public/logo/头像LOGO黑底图.png'
import 头像LOGO白底图 from '@/public/logo/头像LOGO白底图.png'
import 副图白底 from '@/public/logo/副图白底.png'
import 副图黑底 from '@/public/logo/副图黑底.png'
import 副图绿底 from '@/public/logo/副图绿底.png'
import 透明LOGO白色 from '@/public/logo/透明LOGO白色.png'
import 透明LOGO黑色 from '@/public/logo/透明LOGO黑色.png'
import 透明LOGO绿色 from '@/public/logo/透明LOGO绿色.png'



const logo = [
    头像LOGO图,
    头像LOGO黑底图,
    头像LOGO白底图,
    副图绿底,
    副图黑底,
    副图白底,
    透明LOGO绿色,
    透明LOGO黑色,
    透明LOGO白色,
];

export default function page() {
    return (
        <div className=' bg-stone-600 h-dvh  '>

            <div className='flex flex-col h-dvh justify-center  items-center'>

                <div className="flex flex-wrap justify-center">
                    {logo.map((logo, index) => (
                        <div key={index} className="p-4">
                            <Image src={logo} alt={`Logo ${index}`} className="w-24 h-24 object-contain" />
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}