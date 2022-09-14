import React from "react";
import Article from "./Article";

const ArticleList = ({list}) => {
  return (
    <div>
      <main>
        {list.map((listItem) => {
          return(
            <Article key={listItem.id} title={listItem.title} date={listItem.date} preview={listItem.preview}/>
          )
        })}
      </main>
    </div>
  );
};

export default ArticleList;
