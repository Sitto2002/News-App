import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.props.category} - NEWS 24x7`;
  }

  async updateNews () {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72df1b3a06964c87ba7acbfdd45e9baf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72df1b3a06964c87ba7acbfdd45e9baf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
   this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) 
    {
      this.setState({page: this.state.page + 1});
      this.updateNews();
    }
  };

  render() {
    return (
      <>
      <h2 class="font-weight-bold text-center">
          {" "}
          <u>
            <b> TOP - {this.props.category} HEADLINES </b>
          </u>{" "}
        </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className="container my-3">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
      </div>
        </InfiniteScroll>

      </>
    );
  }
}
export default News;
