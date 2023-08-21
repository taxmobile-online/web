import React from "react";

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  document.title = `Taxmobile | ${title}`;
  return null;
};

export default PageTitle;
