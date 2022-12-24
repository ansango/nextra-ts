import { formatDate, usePinnedFilesByCategory } from "lib";
import Link from "next/link";
import { type FC } from "react";
import { Icon } from "./icons/icon";
import React from "./icons/react";

export const PinnedArticlesCategory: FC<{ category: Category }> = ({
  category,
}) => {
  const data = usePinnedFilesByCategory(category);
  console.log(data);
  if (!data || data.length === 0) {
    return null;
  }
  return (
    <section className="space-y-5 flex-grow pb-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-4">
        Artículos destacados
      </h2>
      {data.map(({ title, slug, summary, publishedAt }, i) => (
        <Link key={i} href={`/docs/${slug}/`} className="group">
          <article className="flex py-4 border-b border-gray-200 dark:border-gray-800">
            <Icon
              name={"pinned"}
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
              </p>{" "}
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
  );
};
