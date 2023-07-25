import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "../data/article-content";
export const Articles = () => {
  const { name } = useParams();
  const articles = articleContent.find((article) => article.name === name);
  if (!articles) { return <h1> Article no found</h1> }
  return (
    <div>
      <h1 className="sm:text-4xl text-center font-bold text-2xl my-5">
        {articles.title}
      </h1>
     
      {articles.content.map((paragraph, index) => 
      <p className="mb-4 mx-auto leading-relaxed" key={index}>
        {paragraph}
      </p>
      )}

    </div>
  );
};
