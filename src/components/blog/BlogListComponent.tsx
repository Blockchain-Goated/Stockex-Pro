import React from "react";

type BlogListComponentProps = {
  text: string;
  number: number;
};

const BlogListComponent: React.FC<BlogListComponentProps> = ({
  text,
  number,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {text}
      <span className="badge badge-primary badge-pill">{number}</span>
    </li>
  );
};
export default BlogListComponent;
