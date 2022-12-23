import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    let defaultUrl = "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png";
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl?imageUrl:defaultUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
