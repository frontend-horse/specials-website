import React from "react";
import { PrismicRichText } from "@prismicio/react";

const RichText = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default RichText;
