import { Card, Cards } from "./card";
import react from "public/categories/react.jpg";
import mongodb from "public/categories/mongodb.jpg";
import javascript from "public/categories/javascript.jpg";
import rust from "public/categories/rust.jpg";
import ubuntu from "public/categories/ubuntu.jpg";
import herramientas from "public/categories/herramientas.jpg";
import bookmarks from "public/categories/bookmarks.jpg";

import Image, { StaticImageData } from "next/image";
type Categories = {
  name: Category;
  image?: string | StaticImageData;
  url: string;
}[];

const categories: Categories = [
  { name: "bookmarks", image: bookmarks, url: "/docs/bookmarks" },
  { name: "herramientas", image: herramientas, url: "/docs/herramientas" },
  { name: "ubuntu", image: ubuntu, url: "/docs/ubuntu" },
  { name: "mongodb", image: mongodb, url: "/docs/mongodb" },
  { name: "javascript", image: javascript, url: "/docs/javascript" },
  { name: "rust", image: rust, url: "/docs/rust" },
  { name: "react", image: react, url: "/docs/react" },
];

export const Categories = () => {
  return (
    <section>
      <h2 className="nx-font-semibold nx-tracking-tight nx-mt-10 nx-pb-1 nx-text-3xl contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
        Categorías
      </h2>
      <Cards>
        {categories.map(({ image, name, url }, i) => (
          <Card
            key={`${name}-${i}`}
            href={url}
            title={name}
            arrow
            icon={name}
            image={image}
          >
            {image && (
              <Image
                src={image}
                alt={name}
                className="aspect-12-6 object-cover"
              />
            )}
          </Card>
        ))}
      </Cards>
    </section>
  );
};
