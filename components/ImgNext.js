import React from "react";
import Image from "next/image";

const ImgNext = (props) => {

  return (
    <div {...props}>
      <Image
        height={props.height}
        width={props.width}
        src={props.src}
        alt={props.alt}
        layout="responsive"
      />
    </div>
  );
};

export default ImgNext;
