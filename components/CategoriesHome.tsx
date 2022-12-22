import { Icon } from "./icons/icon";
import Link from "next/link";

type Categories = {
  name: Category;
  url: string;
  description?: string;
}[];

const categories: Categories = [
  {
    name: "bookmarks",
    url: "/docs/bookmarks",
    description: "Lo que voy guardando en mis marcadores de internet",
  },
  {
    name: "herramientas",
    url: "/docs/herramientas",
    description: "Herramientas y utilidades que uso",
  },
  {
    name: "ubuntu",
    url: "/docs/ubuntu",
    description: "Configuraciones, aplicaciones, y tutoriales de Ubuntu",
  },
  {
    name: "mongodb",
    url: "/docs/mongodb",
    description: "Configuraciones, resúmenes, y tips de MongoDB",
  },
  {
    name: "javascript",
    url: "/docs/javascript",
    description: "Artículos y trucos interesantes de JavaScript",
  },
  {
    name: "rust",
    url: "/docs/rust",
    description: "Aprende Rust, el lenguaje de programación de moda",
  },
  {
    name: "react",
    url: "/docs/react",
    description: "Articulos sobre la librería Frontend más popular",
  },
];

export const CategoriesHome = () => {
  return (
    <section className="relative mb-96">
      <div className="absolute inset-x-0 top-[-10rem] z-10 transform-gpu overflow-hidden bottom-24 blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-9rem)] -z-10 h-[25.1875rem] max-w-none -translate-x-1/2 rotate-[40deg] sm:left-[calc(50%-10rem)] sm:h-[57.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".6"
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
      <div
        className="absolute inset-0 top-[20%] lg:top-1/3 md:mt-24 lg:mt-0 nx-bg-gray-200 dark:bg-neutral-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute inset-x-0 top-[20rem] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]">
        <svg
          className="relative left-[calc(50%-9rem)] -z-10 h-[25.1875rem] max-w-none -translate-x-1/2 rotate-[150deg] sm:left-[calc(50%-10rem)] sm:h-[57.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
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
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10 mt-24">
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

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none relative z-10">
            {categories.map(({ name, url, description }, index) => (
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
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
