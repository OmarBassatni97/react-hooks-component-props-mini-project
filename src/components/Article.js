import React from "react";

const Article = ({title, date, preview, key}) => {
  return (
    <article key={key}>
      <h3>{title}</h3>
      <small>{date ? date : "january 1, 1970"}</small>
      <p>{preview}</p>
    </article>
  );
};

export default Article;
