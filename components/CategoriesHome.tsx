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
    <section className="relative mb-24">
      <div
        className="absolute inset-0 top-[20%] lg:top-1/3 md:mt-24 lg:mt-0 nx-bg-gray-200 dark:bg-neutral-900 pointer-events-none"
        aria-hidden="true"
      ></div>

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
