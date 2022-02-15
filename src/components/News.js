import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-4">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            this is news Component
            <NewsItem title="my Title" description="my desc" />
          </div>

          <div className="col-md-4">
            this is news Component
            <NewsItem title="my Title" description="my desc" />
          </div>

          <div className="col-md-4">
            this is news Component
            <NewsItem title="my Title" description="my desc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
