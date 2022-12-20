import bookmark from "./bookmark";
import js from "./js";
import markdown from "./markdown";
import mongodb from "./mongodb";
import pinned from "./pinned";
import react from "./react";
import rust from "./rust";
import tool from "./tool";
import ubuntu from "./ubuntu";

export type IconProps = {
  name?: Category;
};

const renderIcon = (name: Category) => {
  switch (name) {
    case "markdown":
      return markdown;
    case "react":
      return react;
    case "rust":
      return rust;
    case "bookmarks":
      return bookmark;
    case "herramientas":
      return tool;
    case "mongodb":
      return mongodb;
    case "javascript":
      return js;
    case "ubuntu":
      return ubuntu;
    case "pinned":
      return pinned;
    default:
      return markdown;
  }
};

export const Icon = ({ name = "markdown" }: IconProps) => (
  <>{renderIcon(name)}</>
);
