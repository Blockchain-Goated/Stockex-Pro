import React from "react";
import Link from "next/link";

type ListComponentProps = {
  textOne?: string | undefined;
  textTwo?: string | undefined;
  textThree?: string | undefined;
  textFour?: string | undefined;
  hrefOne?: string | undefined;
  hrefTwo?: string | undefined;
  hrefThree?: string | undefined;
  hrefFour?: string | undefined;
};

const ListComponent: React.FC<ListComponentProps> = ({
  textOne,
  textTwo,
  textThree,
  textFour,
  hrefOne,
  hrefTwo,
  hrefThree,
  hrefFour,
}) => {
  return (
    <ul>
      <li>
        <Link href={hrefOne != undefined ? hrefOne : "#"}>{textOne}</Link>
      </li>
      <li>
        <Link href={hrefTwo != undefined ? hrefTwo : "#"}>{textTwo}</Link>
      </li>
      <li>
        <Link href={hrefThree != undefined ? hrefThree : "#"}>{textThree}</Link>
      </li>
      <li>
        <Link href={hrefFour != undefined ? hrefFour : "#"}>{textFour}</Link>
      </li>
    </ul>
  );
};

export default ListComponent;
