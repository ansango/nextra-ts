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
            dateTime={formatDate(publishedAt)}
            className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200"
          >
            {formatDate(publishedAt)}
          </time>
          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <Chip key={`${tag}-${i}`}>{tag}</Chip>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 py-10">{summary}</p>
      </>
    );
  }

  return null;
};
