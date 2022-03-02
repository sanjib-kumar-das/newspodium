import React, { Component } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  articles = [];
  static defaultProps = { category: "general" };
  static propTypes = { category: "propTypes.category" };

  cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    document.title = `NewsPodium ~ ${this.cap(this.props.category)}`;
  }

  async componentDidMount() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pagesize=18`;
    this.props.setProgress(35);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    this.props.setProgress(75);
    let parseData = await data.json();
    this.props.setProgress(95);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // Onclick Functions

  prevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=18`;

    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=18`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h2
          className="heading container text-center text-danger"
          style={{ marginTop: "80px" }}
        >
          ~NewsPodium Top Headlines~
        </h2>
        <hr />
        {this.state.loading && <Spinner />}

        <div className="container mt-5">
          <div className="row align-items-center">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4  px-3" key={element.url}>
                    <Item
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : " "
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={!element.author ? "Unknown" : element.author}
                      time={element.publishedAt}
                      name={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="container d-flex justify-content-between my-5">
          <button
            type="button"
            className="btn btn-dark text-light"
            onClick={this.prevClick}
            disabled={this.state.page <= 1}
          >
            &lArr; Previous Page
          </button>

          <button
            type="button"
            className="btn btn-dark text-light"
            onClick={this.nextClick}
            disabled={
              this.state.page >= Math.ceil(this.state.totalResults / 18)
            }
          >
            Next Page &rArr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
