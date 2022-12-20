import { usePinnedFiles } from "lib";
import { Card, Cards } from "./card";
import React from "./icons/react";

export const PinnedArticles = () => {
  const data = usePinnedFiles();

  return (
    <section className="space-y-5">
      <h2 className="nx-font-semibold nx-tracking-tight nx-mt-10 nx-pb-1 nx-text-3xl contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
        Destacados
      </h2>
      <Cards num={6}>
        {data
          .map(({ publishedAt, title, category, slug }, i) => (
            <Card
              key={`${publishedAt}-${i}`}
              href={`/docs/${slug}/`}
              title={title}
              arrow
              icon="pinned"
            />
          ))
          .slice(0, 12)}
      </Cards>
    </section>
  );
};
