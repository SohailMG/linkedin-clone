import React, { useEffect, useState } from "react";
import "./RightWidget.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";
import FlipMove from "react-flip-move";
import axios from "axios";

const RightWidget = () => {
  const [newsArticles, setnewsArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey=9dcdaf71878849749e57a733cfec0884"
      )
      .then((response) => {
        setnewsArticles(response.data.articles);
        console.log(newsArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const newsletter = (headline, subtitle,id) => (
    <div className="widget-article">
      <div className="widget-article-left">
        <FiberManualRecord />
      </div>
      <div className="widget-article-right" key={headline}>
        <h4>{headline}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="right-widget">
      <div className="widget-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      <FlipMove>
        {newsArticles
          .sort(() => Math.random() - Math.random())
          .slice(0, 3)
          .map((article,index) => newsletter(article.title, article.description,index))}
      </FlipMove>
    </div>
  );
};

export default RightWidget;
