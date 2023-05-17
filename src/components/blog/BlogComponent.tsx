import React from "react";
import Image from "next/legacy/image";
import Link from "next/dist/client/link";
import { StaticImageData } from "next/image";

type BlogComponentProps = {
  imgSrc: string | StaticImageData;
  title: string | undefined;
  hrefTitle: string;
  text: string | undefined;
  hrefText: string | undefined;
};

const BlogComponent: React.FC<BlogComponentProps> = ({
  imgSrc,
  title,
  hrefTitle,
  text,
  hrefText,
}) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="blog-grid">
        <div className="card">
          <Image
            layout="responsive"
            className="img-fluid card-img-top"
            src={imgSrc}
            alt=""
          />
          <div className="card-body">
            <Link href={hrefTitle}>
              <h4 className="card-title">{title}</h4>
            </Link>
            <Link href={hrefText ? hrefText : "#"}>{text}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogComponent;
