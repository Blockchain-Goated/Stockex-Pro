import React from "react";
import Image from "next/legacy/image";
import Link from "next/dist/client/link";
import { StaticImageData } from "next/image";

type BlogMediaComponentProps = {
  blogPostSrc: string | StaticImageData;
  title: string;
  linkHrefOne: string;
  linkHrefTwo: string;
  linkTextOne: string;
  linkTextTwo: string;
};

const BlogMediaComponent: React.FC<BlogMediaComponentProps> = ({
  blogPostSrc,
  title,
  linkHrefOne,
  linkHrefTwo,
  linkTextOne,
  linkTextTwo,
}) => {
  return (
    <li className="media d-flex">
      <Image layout="responsive" src={blogPostSrc} className="me-3" alt="..." />
      <div className="media-body ms-1">
        <h5 className="mt-0 mb-1">{title}</h5>
        <div className="meta-info">
          <Link href={linkHrefOne}>
            <i className="la la-user"></i> {linkTextOne}
          </Link>
          <Link href={linkHrefTwo}>
            <i className="la la-calendar"></i> {linkTextTwo}
            <span id="year"></span>
          </Link>
        </div>
      </div>
    </li>
  );
};
export default BlogMediaComponent;
