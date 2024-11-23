import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description,
    openGraph: {
      title: `${title}`,
      description: description ,
      url: './',
      siteName: title,
      images: image ,
      locale: 'zh_CN',
      type: 'website',
    },
    twitter: {
      title: `${title} `,
      card: 'summary_large_image',
      images: image ,
    },
    ...rest,
  }
}
