import { useLastFiles } from "lib";
import { Card, Cards } from "./card";
import React from "./icons/react";

const Article = ({
  title,
  data,
}: {
  title: string;
  data: FrontMatterArticle[];
}) => (
  <article className="space-y-5">
    <h3 className="nx-font-semibold nx-tracking-tight nx-mt-8 nx-text-2xl">
      {title}
    </h3>
    <Cards num={3}>
      {data
        ?.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
        .map(({ publishedAt, title, category, slug }, i) => (
          <Card
            key={`${publishedAt}-${i}`}
            href={`/docs/${slug}/`}
            title={title}
            arrow
            icon={category}
          />
        ))
        .slice(0, 6)}
    </Cards>
  </article>
);

export const LastArticles = () => {
  const { bookmarks, javascript, mongodb, react, rust, herramientas, ubuntu } =
    useLastFiles();

  return (
    <section className="space-y-5">
      <h2 className="nx-font-semibold nx-tracking-tight nx-mt-10 nx-pb-1 nx-text-3xl contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400">
        Artículos recientes
      </h2>
      <Article title="Recursos" data={[...bookmarks, ...herramientas]} />
      <Article title="Mongodb" data={mongodb} />
      <Article title="Ubuntu" data={ubuntu} />
      <Article title="Javascript" data={javascript} />
      <Article title="Rust" data={rust} />
      <Article title="React" data={react} />
    </section>
  );
};
