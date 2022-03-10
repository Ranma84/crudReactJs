import { ArrowRight, Check } from "icons/solid";
import { Card, Img, Link, Logo } from "ui";
import React, { useState } from 'react';

import { Heart } from "icons/solid";
import useDocumentScrollThrottled from 'lib/useDocumentScrollThrottled';
import { useTranslation } from "i18n";

const LandingPage = () => {
  const { t } = useTranslation("landing");

  const [isStickyHeader, setStickyHeader] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    setStickyHeader(currentScrollTop > 2);
  });

  return (
    <>
      <div className="bg-white dark:bg-gray-700">
        <header className={`py-4 transition duration-150 ease-in-out ${isStickyHeader ? 'sticky top-0 bg-white dark:bg-gray-700 shadow-md z-50':'relative'}`}>
          <div className="max-w-6xl mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <Link href="/">
              <a className="flex items-center md:justify-start justify-center px-2 py-3 ltr:mr-auto rtl:ml-auto w-full md:w-auto">
                <span className="flex items-center md:justify-start justify-center">
                  <Logo height={28} width={28} className="text-indigo-500" />
                  <span className="ltr:ml-3 rtl:mr-3 font-medium text-base text-gray-900 dark:text-gray-100">
                    {t("Dashboard")}
                  </span>
                </span>
              </a>
            </Link>
            <nav className="flex flex-wrap items-center justify-center mb-4 md:mb-0 my-5 md:my-0">
              <a className="mx-5 text-gray-900 dark:text-gray-100 font-medium">{t("features")}</a>
              <Link href="https://nyasha.me">
                <a className="mx-5 text-gray-900 dark:text-gray-100 font-medium">{t("support")}</a>
              </Link>
              <Link href="/">
                <a className="mx-5 text-gray-900 dark:text-gray-100 font-medium">
                  {t("openDemo")}
                </a>
              </Link>
              <Link href="https://nyasha.me">
                <a className="mx-5 text-gray-900 dark:text-gray-100 font-medium">
                  {t("purchaseNow")}
                </a>
              </Link>
              <Link href="/documentation/introduction">
                <a className="bg-gray-200 text-gray-900 py-2 px-4 rounded-lg items-center hover:bg-gray-300 focus:outline-none mx-3 flex items-center font-medium">
                  {t("documentation")}
                </a>
              </Link>
            </nav>
          </div>
        </header>

        <section>
          <div className="max-w-4xl mx-auto flex px-5 py-20 flex-col items-center">
            <div className="px-4 text-center">
              <h1 className="text-5xl mb-6 font-medium leading-none">
                {t("heroTitle")}
              </h1>
              <p className="mb-6 text-base leading-snug">{t("heroSubtitle")}</p>
              <div className="flex items-center justify-center mt-3">
                <Link href="/">
                  <a className="bg-indigo-500 text-white py-4 px-6 rounded-lg items-center hover:bg-gray-300 focus:outline-none mx-3 flex items-center">
                    {t("openDashboardPreview")}
                    <span className="hidden sm:inline-block ltr:ml-4 rtl:mr-4">
                      <ArrowRight width={20} height={20} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-5xl mx-auto mx-auto flex px-5 flex-col items-center">
            <div className="relative">
              <Img
                src="images/screenshots/item.png"
                alt=""
                className="object-cover object-center w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="max-w-4xl mx-auto flex px-5 py-20 flex-col items-center">
            <h1 className="mb-5 font-bold text-gray-700 dark:text-gray-100 leading-none">
              Made with these awesome tools
            </h1>
            <div className="text-center">
              <Img
                src="images/logos/react.png"
                alt=""
                className="h-10 sm:h-12 px-5 py-3 inline-block grayscale"
              />
              <Img
                src="images/logos/next.png"
                alt=""
                className="h-10 sm:h-12 px-5 py-3 inline-block grayscale"
              />
              <Img
                src="images/logos/tailwindcss.svg"
                alt=""
                className="h-10 sm:h-12 px-5 py-3 inline-block grayscale"
              />
              <Img
                src="images/logos/vercel.svg"
                alt=""
                className="h-10 sm:h-12 px-5 py-3 inline-block grayscale"
              />
              <Img
                src="images/logos/swr.svg"
                alt=""
                className="h-10 sm:h-12 px-5 py-3 inline-block grayscale"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-4xl mx-auto flex px-5 py-10 flex-col">
            <div className="mb-16 pt-10 flex flex-col sm:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 sm:order-2 ltr:pl-0 rtl:pr-0 md:ltr:pl-4 md:rtl:pr-4">
                <div className="p-8">
                  <Img
                    src="images/screenshots/1.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-0 mb-0 md:mt-10 md:mb-10 mx-auto sm:order-1">
                <div className="mb-3 text-2xl font-bold">
                  {t("madeWithReact")}
                </div>
                <div className="text-base">{t("madeWithReactText")}</div>
              </div>
            </div>
            <div className="mb-16 pt-10 flex flex-col sm:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 sm:order-1 ltr:pr-0 rtl:pl-0 md:ltr:pr-4 md:rtl:pl-4">
                <div className="p-8">
                  <Img
                    src="images/screenshots/2.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-0 mb-0 md:mt-10 md:mb-10 mx-auto sm:order-2">
                <div className="mb-3 text-2xl font-bold">
                  {t("madeWithTailwind")}
                </div>
                <div className="text-base">{t("madeWithTailwindText")}</div>
              </div>
            </div>
            <div className="pt-10 flex flex-col sm:flex-row justify-center items-center">
              <div className="w-full md:w-1/2 sm:order-2 ltr:pl-0 rtl:pr-0 md:ltr:pl-4 md:rtl:pr-4">
                <div className="p-8">
                  <Img
                    src="images/screenshots/3.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-0 mb-0 md:mt-10 md:mb-10 mx-auto sm:order-1">
                <div className="mb-3 text-2xl font-bold">
                  {t("highlyCustomizable")}
                </div>
                <div className="text-base">{t("highlyCustomizableText")}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="max-w-5xl mx-auto mx-auto flex px-5 flex-col items-center">
            <Card
              className="bg-gray-900 rounded-xl px-3 py-10 sm:px-10 sm:py-10 md:px-20 md:py-20 bg-cover"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%231e2431' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23212937' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23252e3d' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23293242' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%232d3748' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23333d4e' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23384355' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%233e495b' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23444f61' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%234a5568' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex flex-col justify-start px-3">
                  <div className="mb-2 text-white font-black">
                    <span className="text-6xl">$20</span>
                  </div>
                  <div className="block sm:flex mb-2">
                    <button className="bg-yellow-500 py-3 px-8 rounded-lg items-center focus:outline-none mx-auto">
                      {t("purchaseNow")}
                    </button>

                    <button className="bg-white py-3 px-8 rounded-lg items-center focus:outline-none sm:ltr:ml-3 sm:rtl:mr-3 mt-3 sm:mt-0">
                      {t("openLivePreview")}
                    </button>
                  </div>
                  <p className="text-white font-bold text-xs">
                    {t("licenses")}
                  </p>
                </div>

                <div className="px-3 mt-5 lg:mt-0">
                  <p className="font-bold text-gray-400 ltr:text-left rtl:text-right mb-3">
                    {t("downloadIncludes")}
                  </p>
                  <div className="mt-1">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <div className="flex items-center mb-2" key={index}>
                        <Check
                          width={18}
                          height={18}
                          strokeWidth={4}
                          className="ltr:mr-5 rtl:ml-5 text-blue-500"
                        />
                        <p className="text-lg font-bold text-white text-opacity-75">
                          {t(`f${item}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <footer>
          <div className="max-w-6xl px-5 py-20 mx-auto flex items-start flex-wrap md:flex-nowrap flex-col">
            <div className="flex flex-wrap -mx-2 w-full">
              <div className="md:w-1/5 w-1/2 px-4">
                <h2 className="font-medium mb-3 uppercase text-black dark:text-white">
                  {t("tools")}
                </h2>
                <nav className="flex flex-col mb-10">
                  <Link href="https://nextjs.org/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">NextJS</a>
                  </Link>
                  <Link href="https://tailwindcss.com/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      Tailwindcss
                    </a>
                  </Link>
                  <Link href="https://reactjs.org/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">React</a>
                  </Link>
                  <Link href="https://heroicons.com/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      Heroicons
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="md:w-1/5 w-1/2 px-4">
                <h2 className="font-medium mb-3 uppercase text-black dark:text-white">
                  {t("help")}
                </h2>
                <nav className="flex flex-col mb-10">
                  <Link href="/documentation/introduction">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("documentation")}
                    </a>
                  </Link>
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("support")}
                    </a>
                  </Link>
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("contact")}
                    </a>
                  </Link>
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("customerReviews")}
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="md:w-1/5 w-1/2 px-4">
                <h2 className="font-medium mb-3 uppercase text-black dark:text-white">
                  {t("product")}
                </h2>
                <nav className="flex flex-col mb-10">
                  <Link href="/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("demo")}
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("features")}
                    </a>
                  </Link>
                  <Link href="/taskboard">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("moodboard")}
                    </a>
                  </Link>
                  <Link href="/chat">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("chat")}
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="md:w-1/5 w-1/2 px-4">
                <h2 className="font-medium mb-3 uppercase text-black dark:text-white">
                  {t("marketplace")}
                </h2>
                <nav className="flex flex-col mb-10">
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("getStandard")}
                    </a>
                  </Link>
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("getExtended")}
                    </a>
                  </Link>
                  <Link href="https://nyasha.me">
                    <a className="text-gray-900 dark:text-gray-100 hover:text-gray-800">
                      {t("storeFront")}
                    </a>
                  </Link>
                </nav>
              </div>
              <div className="md:w-1/5 sm:w-1/2 w-full px-4">
                <h2 className="font-medium mb-3 uppercase text-black dark:text-white">
                  Contact
                </h2>
                <p>123 Fake street</p>
                <p>hello@example.com</p>
                <p>00123456789</p>
                <Link href="/">
                  <a className="flex font-medium items-center justify-start mt-3 leading-none">
                    <Logo height={32} width={32} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 w-full justify-center">
              <p className="flex items-center mt-6 text-xs">
                Built with{" "}
                <Heart
                  width={16}
                  height={16}
                  className="inline-block text-red-500 mx-1"
                />{" "}
                in Harare by{" "}
                <Link href="https://nyasha.me">
                  <a className="px-1"> Nyasha</a>
                </Link>
                . &copy; All Rights Reserved 2020
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

LandingPage.getInitialProps = async () => ({
  namespacesRequired: ["landing"],
});

export default LandingPage;
