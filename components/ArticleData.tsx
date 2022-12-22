import type { FC } from "react";
import { formatDate, useMarkdownData } from "lib";
import { Chip } from "./Chip";

export const ArticleData: FC = () => {
  const data = useMarkdownData();

  if (data) {
    const { title, publishedAt, summary, tags } = data;
    return (
      <>
        <h1>{title}</h1>
        <div className="space-y-5">
          <time
            className="nx-mt-12 nx-block nx-text-xs nx-text-gray-500 dark:nx-text-gray-400"
            dateTime={publishedAt}
          >
            {formatDate(publishedAt)}
          </time>
          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <Chip key={`${tag}-${i}`}>{tag}</Chip>
            ))}
          </div>
        </div>
        <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">{summary}</p>
      </>
    );
  }

  return null;
};
