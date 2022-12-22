import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // in class based components, we use this keyword to access any variable or function inside the class
  // in class based components we use constructor to initialize the state
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  // in class based components we use componentDidMount to fetch data from the api
  async componentDidMount() {
    // fetch data from the url and convert it into json and the update our articles variable which is initialized in constructor setState 
    // await is used to wait for the data to be fetched and then only the next line will be executed
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=439f2438279f42a2b47bbbae2b53888e&page=1&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=439f2438279f42a2b47bbbae2b53888e&page=${this.state.page - 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=439f2438279f42a2b47bbbae2b53888e&page=${this.state.page + 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBuster - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults / 18)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
