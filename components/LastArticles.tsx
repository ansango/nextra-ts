import { formatDate, useAllLastFiles, usePinnedFiles } from "lib";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { Icon } from "./icons/icon";
import React from "./icons/react";

const BackGroundBottom: FC = () => {
  return (
    <div className="absolute inset-x-0 top-[calc(100%-90rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-80rem)]">
      <svg
        className="relative left-[calc(50%+20rem)] h-[61.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+10rem)] sm:h-[22.375rem]"
        viewBox="0 0 1155 678"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
          fillOpacity=".5"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC"></stop>
            <stop offset="1" stopColor="#FF80B5"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const BackGroundHero: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="isolate bg-transparent">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[40rem]">
        <svg
          className="relative left-[calc(50%-9rem)] -z-10 h-[32.1875rem] max-w-none -translate-x-1/2 bottom-52 rotate-[40deg] sm:left-[calc(50%-10rem)] sm:h-[27.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".7"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC"></stop>
              <stop offset="1" stopColor="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section>{children}</section>
      <BackGroundBottom />
    </div>
  );
};

const HeroArticle: FC<{ title: string; description: string }> = ({
  title = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
}) => {
  return (
    <BackGroundHero>
      <div className="pt-20 pb-32 sm:pt-48 sm:pb-40 max-w-3xl">
        <div>
          <div>
            <h1>{title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </BackGroundHero>
  );
};

export const LastArticlesGrid = () => {
  const pinned = usePinnedFiles().slice(0, 6);
  const articles = useAllLastFiles(12).filter((file) => !pinned.includes(file));
  return (
    <main className="relative flex flex-col xl:flex-row-reverse justify-between z-10 max-w-6xl mx-auto">
      <aside className="relative shrink-0 mt-12 xl:mt-0 xl:ml-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-4">
            Artículos destacados
          </h2>
          <ul className="-my-0.5">
            {pinned.map(
              ({ title, category, slug, summary, publishedAt }, i) => (
                <Link href={`/docs/${slug}/`} key={i} className="group">
                  <li className="flex border-b border-gray-200 dark:border-gray-800 py-4 xl:max-w-xs">
                    <Icon
                      name="pinned"
                      className="w-8 h-8 xl:w-5 xl:h-5 mt-1 mr-3 text-gray-600 dark:text-gray-400 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                    />
                    <article>
                      <h3 className="mb-2 text-xl xl:text-base font-bold leading-snug tracking-tight">
                        {title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-3 xl:line-clamp-2 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                        {summary}
                      </p>
                    </article>
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
      </aside>
      <section className="space-y-5 flex-grow">
        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-4">
          Artículos recientes
        </h2>
        {articles.map(({ title, slug, summary, category, publishedAt }, i) => (
          <Link key={i} href={`/docs/${slug}/`} className="group">
            <article className="flex py-4 border-b border-gray-200 dark:border-gray-800">
              <Icon
                name={category}
                className="w-8 h-8 mt-1 mr-3 text-gray-600 dark:text-gray-400 shrink-0 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              />
              <div>
                <header>
                  <h3 className="mb-2 text-xl font-bold leading-snug tracking-tight">
                    {title}
                  </h3>
                </header>
                <p className="text-gray-600 dark:text-gray-400 text-base mb-4 line-clamp-3 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  {summary}
                </p>
                <time
                  dateTime={formatDate(publishedAt)}
                  className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
                >
                  {formatDate(publishedAt)}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

export const LastArticles = () => {
  return (
    <section className="relative px-4 sm:px-6 pb-32 sm:pb-40">
      <HeroArticle
        title="Aquí tines lo que buscas"
        description="Las últimas publicaciones sobre marcadores, herramientas, configuraciones de Linux y mucho desarrollo web."
      />
      <LastArticlesGrid />
    </section>
  );
};
