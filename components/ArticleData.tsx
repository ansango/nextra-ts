import type { FC } from "react";
import { formatDate, useMarkdownData } from "lib";

export const ArticleData: FC = () => {
  const data = useMarkdownData();
  if (data) {
    const { title, publishedAt, summary, tags } = data;
    return (
      <>
        <h1>{title}</h1>
        <div className="space-y-5">
          <time className="text-sm text-gray-500" dateTime={publishedAt}>
            {formatDate(publishedAt)}
          </time>
          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <span
                className="mr-2 mb-2 rounded-full px-2 py-1.5 text-sm nx-bg-primary-50 font-medium nx-text-primary-600 dark:nx-bg-primary-500/10 contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
                key={`${tag}-${i}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">{summary}</p>
      </>
    );
  }

  return null;
};
