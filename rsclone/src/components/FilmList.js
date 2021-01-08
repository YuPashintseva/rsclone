import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import star from './assets/star.png'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class FilmList extends React.Component {
    constructor() {
        super();
        this.state = {data: []};
    }

    async componentDidMount() {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fb0fcc2d34caffc53da53d676fbf678a&language=en-US&page=1');
        const json = await response.json();
        this.setState({ data: json });
    }

    render() {
        //
        if (this.state.data.results) {
            console.log(this.state.data.results[0]);
            return (
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding"
                centerMode={false}
                slidesToSlide={3}
            >
            
            {this.state.data.results.map(el => (
                <div>
                    <div className="films-list-img">
                        <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt={el.title}/>
                        <div className="bottom-content-wrapper">
                            <div className="rating">
                                <div><img src={star} alt="star" /></div>
                                <div className="vote_average">{el.vote_average}</div>
                            </div>
                            <div className="film-title">{el.title}</div>
                            <button type="button" className="add-to-watchlist-btn">+ Watchlist</button>
                        </div>
                        
                    </div>
                </div>
            ))};
                
            </Carousel>
            );
        } else {
            return (
                <div>Wait...</div>
            );
        }
    
    }

}

export default FilmList;