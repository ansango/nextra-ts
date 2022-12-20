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
    <section className="mb-44">
      <Cards>
        {categories.map(({ image, name, url }, i) => (
          <Card
            key={`${name}-${i}`}
            href={url}
            title={name.charAt(0).toUpperCase() + name.slice(1)}
            arrow
            icon={name}
            image={image}
          >
            <div className="relative h-52">
              <div className="bg-white/10 dark:bg-white/5 z-10 absolute inset-0 w-full h-full"></div>
              {image && (
                <Image
                  src={image}
                  alt={name}
                  className="aspect-12-6 object-cover absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </Card>
        ))}
      </Cards>
    </section>
  );
};
