import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { StaticImageData } from "next/image";

type IndexFourProps = {
  img_src: string | StaticImageData;
  headi: string;
  para: string;
  classs: string;
  buttontext: string;
};

const IndexFour: React.FC<IndexFourProps> = ({
  img_src,
  headi,
  para,
  classs,
  buttontext,
}) => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="new-product-content">
        <Image
          className="Image-fluid"
          src={img_src}
          alt=""
          layout="responsive"
        />
        <h4>{headi}</h4>
        <p>{para}</p>
        <Link href="#" className={classs}>
          {buttontext}
        </Link>
      </div>
    </div>
  );
};
export default IndexFour;
