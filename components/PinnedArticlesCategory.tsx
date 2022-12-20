import { usePinnedFilesByCategory } from "lib";
import { type FC } from "react";
import { Card, Cards } from "./card";
import React from "./icons/react";

export const PinnedArticlesCategory: FC<{ category: Category }> = ({
  category,
}) => {
  const data = usePinnedFilesByCategory(category);
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <section className="space-y-5 relative z-0">
      <Cards num={6}>
        {data.map(({ publishedAt, title, slug }, i) => (
          <Card
            key={`${publishedAt}-${i}`}
            href={`/docs/${slug}/`}
            title={title}
            arrow
            icon="pinned"
          />
        ))}
      </Cards>
    </section>
  );
};
