import React from "react";

function BodyClass({ bodyClass, children }) {
  return (
    <div>
      <body className={bodyClass}>{children}</body>
    </div>
  );
}

export default BodyClass;
