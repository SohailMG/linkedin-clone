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
        "https://gnews.io/api/v4/top-headlines?&token=9890613dffc1b5cf47b1635f95d1cc5e&country=gb"
      )
      .then((response) => {
        setnewsArticles(response.data.articles);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const newsletter = (headline, subtitle, id) => (
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
          .slice(0, 4)
          .map((article, index) =>
            newsletter(article.title, article.description, index)
          )}
      </FlipMove>
    </div>
  );
};

export default RightWidget;
