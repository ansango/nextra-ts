type Title = string;
type Summary = string;

type Category =
  | "pinned"
  | "markdown"
  | "react"
  | "javascript"
  | "rust"
  | "mongodb"
  | "bookmarks"
  | "herramientas"
  | "ubuntu";

type Tag = string;
type PublishedAt = string;

type Post = {
  title: Title;
  slug: string;
};

type FrontMatterArticle = {
  title: Title;
  summary: Summary;
  category: Category;
  tags: Tag[];
  publishedAt: PublishedAt;
  slug: string;
  pinned?: boolean;
};
