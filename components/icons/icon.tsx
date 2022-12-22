import Bookmark from "./bookmark";
import Js from "./js";
import Markdown from "./markdown";
import Mongodb from "./mongodb";
import Pinned from "./pinned";
import ReactIcon from "./react";
import Rust from "./rust";
import Tool from "./tool";
import Ubuntu from "./ubuntu";

export type IconProps = {
  name?: Category;
  className?: string;
};

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case "markdown":
      return <Markdown {...props} />;
    case "react":
      return <ReactIcon {...props} />;
    case "bookmarks":
      return <Bookmark {...props} />;
    case "javascript":
      return <Js {...props} />;
    case "mongodb":
      return <Mongodb {...props} />;
    case "rust":
      return <Rust {...props} />;
    case "ubuntu":
      return <Ubuntu {...props} />;
    case "herramientas":
      return <Tool {...props} />;
    case "pinned":
      return <Pinned {...props} />;
    default:
      return <Markdown {...props} />;
  }
};
