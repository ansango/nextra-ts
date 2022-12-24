import type { FC } from "react";
import { formatDate, useMarkdownData } from "lib";
import { Chip } from "./Chip";
import { useConfig } from "nextra-theme-docs";

export const ArticleData: FC = () => {
  const { frontMatter } = useConfig();

  const { title, publishedAt, summary, tags } = frontMatter;
  return (
    <div>
      <h1>{title}</h1>
      <div className="space-y-5">
        <time
          dateTime={formatDate(publishedAt)}
          className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
        >
          {formatDate(publishedAt)}
        </time>
        <div className="flex flex-wrap">
          {tags.map((tag: string, i: number) => (
            <Chip key={`${tag}-${i}`}>{tag}</Chip>
          ))}
        </div>
      </div>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0 text-gray-600 dark:text-gray-400">
        {summary}
      </p>
    </div>
  );
};
