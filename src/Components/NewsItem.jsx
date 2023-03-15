import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const NewsItem = (props)=> {

    let { title, deccription, imageUrl, newsUrl, author, publishedAt, source } = props
    return (
      <>
        <Card className=''>
          <span 
            style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}
            className="badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <Card.Img variant="top" src={!imageUrl ? "https://i.dailymail.co.uk/1s/2023/03/11/13/68583139-0-image-a-2_1678542931063.jpg" : imageUrl} />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>
              {deccription}...
            </Card.Text>
            <p className='card-text'><small className='text-muted text-2xl'>By {!author ? "Unknown" : author} on {new Date(publishedAt).toLocaleTimeString()}</small></p>
            <Button variant="dark" target='_blank' href={newsUrl} className='btn-sm'>Read More...</Button>
          </Card.Body>
        </Card>
      </>
    )
}

export default NewsItem