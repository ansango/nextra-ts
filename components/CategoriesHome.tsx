import { Icon } from "./icons/icon";
import Link from "next/link";

type Categories = {
  name: Category;
  url: string;
}[];

const categories: Categories = [
  { name: "bookmarks", url: "/docs/bookmarks" },
  { name: "herramientas", url: "/docs/herramientas" },
  { name: "ubuntu", url: "/docs/ubuntu" },
  { name: "mongodb", url: "/docs/mongodb" },
  { name: "javascript", url: "/docs/javascript" },
  { name: "rust", url: "/docs/rust" },
  { name: "react", url: "/docs/react" },
];

export const CategoriesHome = () => {
  return (
    <section className="relative mb-24">
      <div
        className="absolute inset-0 top-[20%] lg:top-1/3 md:mt-24 lg:mt-0 nx-bg-gray-200 dark:bg-neutral-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-4">
              Encuentra lo que buscas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Accede directamente a los temas que te interesan a través de las
              categorías.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {categories.map(({ name, url }, index) => (
              <Link
                href={url}
                key={`${name}-${index}`}
                className="relative flex flex-col items-center p-6 bg-white dark:bg-[#0e0e0e] rounded shadow-xl h-48"
              >
                <span className="bg-gradient-to-r from-[#7670c9] to-[#de6d9c] rounded-full p-3 mb-2">
                  <Icon name={name} className="w-6 text-white" />
                </span>

                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
