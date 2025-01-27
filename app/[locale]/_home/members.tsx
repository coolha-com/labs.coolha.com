'use client'
import Image from "next/image"
import Link from "next/link"
import { FaLink, FaXTwitter } from "react-icons/fa6"
import { useI18n } from "@/locales/client"

export default function D() {
  const t = useI18n();
  const people = [
    {
      name: ' Jiangban Qin',
      role: t('创始人'),
      imageUrl: 'https://aqua-wrong-booby-224.mypinata.cloud/ipfs/QmXsMMgye3xYXCTZcRMXYcDMoq2EKvVyhzjEcDsiDC5Agp',
      website: 'https://link3.to/qinjiangban',
      x: 'https://x.com/qinjiangban',
      lens: 'https://share.lens.xyz/u/lens/qinjiangban',
    }
    /* ,
    {
      name: 'Michael Foster',
      role: '联合创始人 / CTO',
      imageUrl: '/logo/LOGO白底图.png',
      website: '',
      x: '',
      lens: '',
    },
    {
      name: 'Dries Vincent',
      role: 'Business Relations 业务关系',
      imageUrl: '/logo/LOGO副图.png',
      website: '',
      x: '',
      lens: '',
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer 前端开发人员',
      imageUrl: '/logo/LOGO黑底图.png',
      website: '',
      x: '',
      lens: '',
    },
    {
      name: 'Leslie Alexander',
      role: 'Smart Contract Engineer 智能合约工程师',
      imageUrl: '透明LOGO白色.png',
      website: '',
      x: '',
      lens: '',
    },
    {
      name: 'Courtney Henry',
      role: 'Designer 设计师',
      imageUrl: '透明LOGO黑色.png',
      website: '',
      x: '',
      lens: '',
    },
    {
      name: 'Leslie Alexander',
      role: 'Director of Product 产品总监',
      imageUrl: '透明LOGO白色.png',
      website: '',
      x: '',
      lens: '',
    }, */
  ]

  return (
    <div className=" py-24 sm:py-32">



      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">

        <div className="max-w-2xl bg-[#C0E218] p-2 rounded-2xl">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl text-[#000]">{t('认识我们的成员')}</h2>
          <p className="mt-6 text-lg leading-8 text-[#000]">
            {t('一起构建Web3')}
          </p>
        </div>

        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6 bg-[#C0E218] p-2 rounded-2xl">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base leading-7 tracking-tight font-bold text-[#000]">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#3f1de7]">{person.role}</p>

                  <div className="flex gap-2  ">
                    {person.website && (
                      <Link href={person.website} className="text-black hover:text-black hover:bg-white" target='_blank'>
                        <FaLink size={24} />
                      </Link>
                    )}

                    {person.x && (
                      <Link href={person.x} className="text-black hover:text-black hover:bg-white" target='_blank'>
                        <FaXTwitter size={24} />
                      </Link>
                    )}

                    {person.lens && (
                      <Link href={person.lens} className="text-black hover:text-black hover:bg-white" target='_blank'>
                        <Image
                          src="/Icon-T-Black_@2x.png"
                          alt="Lens-Black"
                          className={` hover:bg-white`}
                          width={24} height={24}
                        />
                      </Link>
                    )}
                  </div>

                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>



    </div>
  )
}
const ThemeImage = (props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <div>
      <Image {...rest}
        src="/Icon-T-Black_@2x.png"
        alt="Lens-Black"
        className={`flex dark:hidden hover:bg-primary rounded-2xl`}
        width={24} height={24}
      />
      <Image {...rest}
        src="/Icon-T-White_@2x.png"
        alt="Lens-White"
        className={` hidden dark:flex hover:bg-primary rounded-2xl`}
        width={24} height={24}
      />
    </div>
  )
}