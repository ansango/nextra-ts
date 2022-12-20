import { useArticlesByCategory } from "lib";
import { type FC } from "react";
import { Card, Cards } from "./card";
import React from "./icons/react";

export const ArticlesCategory: FC<{ category: Category }> = ({ category }) => {
  const data = useArticlesByCategory(category);
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <section className="space-y-5 relative z-0">
      <Cards num={6}>
        {data.map(({ publishedAt, title, slug, category }, i) => (
          <Card
            key={`${publishedAt}-${i}`}
            href={`/docs/${slug}/`}
            title={title}
            arrow
            icon={category}
          />
        ))}
      </Cards>
    </section>
  );
};
