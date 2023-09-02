import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div>
        <div className="card">
            <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-info"> {source} </span>
            </div>
        <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/107289482-1692629848062-gettyimages-1613790342-AFP_33RX8J6.jpeg?v=1693346479&w=1920&h=1080"
                : imageUrl
            }
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"> <small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toLocaleTimeString()} </small></p>
            <a rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
