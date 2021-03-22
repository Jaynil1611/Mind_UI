import React from "react";
import "./Typography.css";

function Typography(props) {
  const headingText = "Get curious, Life’s going to get hard.";
  const subtitle = `Love to Code? Join my course with an instant discount of $99.`;

  const bodyText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa doloribus perferendis libero quae expedita molestiae, numquam, error distinctio labore ratione voluptatum consectetur ab culpa voluptates amet fuga eum vero sed?`;

  return (
    <div className="text-container">
      <h3> Typography </h3>
      <p>
        Typography component includes headings, text, paragraphs of different
        sizes.
      </p>
      <h3> Usage </h3>
      <h3> Heading Variants</h3>
      <div className="text-examples">
        <div className="h1 spacing"> h1. {headingText} </div>
        <div className="h2 spacing"> h2. {headingText} </div>
        <div className="h3 spacing"> h3. {headingText} </div>
        <div className="h4 spacing"> h4. {headingText} </div>
        <div className="h5 spacing"> h5. {headingText} </div>
        <div className="h6 spacing"> h6. {headingText} </div>
      </div>
      <h3> Text Variant </h3>
      <div className="text-examples">
        <div className="subtitle-md spacing">subtitle1. {subtitle}</div>
        <div className="body-md spacing-body">body1. {bodyText}</div>
        <div className="subtitle-sm spacing">subtitle2. {subtitle}</div>
        <div className="body-sm spacing-body">body2. {bodyText}</div>
      </div>
      <h3> Centered and Gray Text </h3>
      <div className="text-examples">
        <div className="subtitle-md spacing text-center">{subtitle}</div>
        <div className="subtitle-md spacing text-center text-gray">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default Typography;
