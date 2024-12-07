import { getRequestConfig } from 'next-intl/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { headers, cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // 获取请求头中的 Accept-Language
  const requestHeaders = headers();
  const acceptLanguage = requestHeaders.get('accept-language') || '';

  // 从 cookies 获取用户首选语言
  const userLocaleFromCookies = cookies().get('locale')?.value;

  const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguage } });
  const userLanguages = negotiator.languages();

  // 定义支持的区域设置
  const supportedLocales = ['en', 'zh'];
  const defaultLocale = 'en';

  // 如果 cookies 中有用户首选语言，优先使用
  const locale = userLocaleFromCookies || match(userLanguages, supportedLocales, defaultLocale);

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
