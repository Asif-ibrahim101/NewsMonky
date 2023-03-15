import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {
  const [articles,setArticles] = useState([]);
  const [page,setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalArticles, setTotalArticles] = useState(0);

   const updateNews = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e9b3a6143d7e4968a28713d115fa572f&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles)
    setTotalArticles(parsedData.totalArticles)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e9b3a6143d7e4968a28713d115fa572f&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalArticles(parsedData.totalArticles);
  };
    return (
      <>
        <div className='my-5'>
          <h2 className='my-5 text-center'>NewsMonkey - Top {props.category} Headlines</h2>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalArticles}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row justify-content-md-center">
                {articles.map((e, id) => {
                  return <div key={id} className="col-md-4 mb-5">
                    <NewsItem
                      className='p-3'
                      title={e.title}
                      deccription={e.description}
                      imageUrl={e.urlToImage}
                      newsUrl={e.url}
                      author={e.author}
                      publishedAt={e.publishedAt}
                      source={e.source.name} />
                  </div>
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>

      </>
    )
}

News.defaultProps = {
  country: 'us',
  pageSize: 9,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
