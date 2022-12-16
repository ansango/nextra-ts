type Title = string;
type Summary = string;
type Category = string;
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
  relatedPosts?: Post[];
};
