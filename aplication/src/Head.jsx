import React from "react";

export const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  });
  return <></>;
};
