import { useRouter } from "next/router";
import type { Folder, MdxFile, Page } from "nextra";

import { getPagesUnderRoute } from "nextra/context";
import { useEffect, useState } from "react";

export const formatDate = (
  date: Date | string = new Date(),
  locale: Intl.LocalesArgument = "es-ES",
  options?: Intl.DateTimeFormatOptions
) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const _options = options || defaultOptions;
  const now = new Date(date).toLocaleDateString(locale, _options);

  return now;
};

export const useMarkdownData = (): FrontMatterArticle | null => {
  const { asPath } = useRouter();
  const folders = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/docs").filter(
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

export const useLastFiles = (): Record<Category, FrontMatterArticle[]> => {
  const folders = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "MdxPage"
  ) as MdxFile[];

  const articles = folders.flatMap((folder) => folder.children) as MdxFile[];
  const allFiles = [...articles, ...files];

  const sortedFiles = allFiles
    .map((file) => file.frontMatter)
    .sort(
      (a, b) =>
        new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    )
    .filter((file) => file?.publishedAt) as FrontMatterArticle[];
  const filesByCategory = sortedFiles.reduce((acc, file) => {
    const { category } = file;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(file);
    return acc;
  }, {} as Record<Category, FrontMatterArticle[]>);

  return filesByCategory;
};

export const useAllLastFiles = (limit = 6): FrontMatterArticle[] => {
  const { bookmarks, herramientas, javascript, mongodb, react, rust, ubuntu } =
    useLastFiles();
  const allFiles = [
    ...bookmarks,
    ...herramientas,
    ...javascript,
    ...mongodb,
    ...react,
    ...rust,
    ...ubuntu,
  ]
    .sort(
      (a, b) =>
        new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    )
    .slice(0, limit);
  return allFiles;
};

export const usePinnedFiles = (): FrontMatterArticle[] => {
  const folders = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "MdxPage"
  ) as MdxFile[];

  const articles = folders.flatMap((folder) => folder.children) as MdxFile[];
  const allFiles = [...articles, ...files];

  const pinnedFiles = allFiles
    .map((file) => file.frontMatter)
    .sort(
      (a, b) =>
        new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    )
    .filter((file) => file?.publishedAt)
    .filter((file) => file?.pinned) as FrontMatterArticle[];

  return pinnedFiles;
};

export const usePinnedFilesByCategory = (
  category: Category
): FrontMatterArticle[] => {
  const folders = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "MdxPage"
  ) as MdxFile[];

  const articles = folders.flatMap((folder) => folder.children) as MdxFile[];
  const allFiles = [...articles, ...files];

const pinned= allFiles
  .map((file) => file.frontMatter)
  .sort(
    (a, b) =>
      new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
);
  console.log(pinned);

  const pinnedFiles = allFiles
    .map((file) => file.frontMatter)
    .sort(
      (a, b) =>
        new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    )
    .filter((file) => file?.publishedAt)
    .filter((file) => file?.pinned)
    .filter((file) => file?.category === category) as FrontMatterArticle[];

  return pinnedFiles;
};

export const useArticlesByCategory = (
  category: Category
): FrontMatterArticle[] => {
  const folders = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "Folder"
  ) as Folder<Page>[];
  const files = getPagesUnderRoute("/docs").filter(
    (folder) => folder.kind === "MdxPage"
  ) as MdxFile[];

  const articles = folders.flatMap((folder) => folder.children) as MdxFile[];
  const allFiles = [...articles, ...files];

  const filesByCategory = allFiles
    .map((file) => file.frontMatter)
    .sort(
      (a, b) =>
        new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime()
    )
    .filter((file) => file?.publishedAt)
    .filter((file) => !file?.pinned)
    .filter((file) => file?.category === category) as FrontMatterArticle[];

  return filesByCategory;
};

export const useMounted = (): boolean => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
