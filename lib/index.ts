import { useRouter } from "next/router";
import type { Folder, MdxFile, Page } from "nextra";
import { getPagesUnderRoute } from "nextra/context";

export const formatDate = (
  date: Date | string = new Date(),
  locale: Intl.LocalesArgument = "es-ES",
  options?: Intl.DateTimeFormatOptions
) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const _options = options || defaultOptions;
  const now = new Date(date).toLocaleDateString(locale, _options);

  return now;
};

export const useMarkdownData = (): FrontMatterArticle | null => {
  const { asPath } = useRouter();
  const folders = getPagesUnderRoute("/blog").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/blog").filter(
    (folder) => folder.kind === "MdxPage"
  ) as MdxFile[];

  const articles = folders.flatMap((folder) => folder.children) as MdxFile[];
  const allFiles = [...articles, ...files];
  const currentRouteData =
    allFiles && allFiles.find((article) => article.route === asPath);

  return currentRouteData
    ? (currentRouteData.frontMatter as FrontMatterArticle)
    : null;
};
