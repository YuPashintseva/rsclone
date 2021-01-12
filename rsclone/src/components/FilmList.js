import {filmPage} from "../App.js";
import {ReactDOM} from 'react-dom';
import React from 'react';
import Carousel from "react-multi-carousel";
import ModalWindow from './ModalWindow';
import 'react-multi-carousel/lib/styles.css';
import star from './assets/star.png'
import play from './assets/play.png'
import info from './assets/info-grey.png';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
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
        if (this.state.data.results) {
            return (
                <div>
                <ModalWindow />
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
                    <div className="films-list-img App-link">
                        <Router><Link to="/"></Link> <Link style={{ textDecoration: 'none', color: 'white' }} to= "/FilmPage"> 
                    
                       
                            <img className="poster-img" onClick={()=>filmPage(el)} src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt={el.title}/>
                            </Link>    
                        </Router>
                        <div className="bottom-content-wrapper">
                            <div className="rating">
                                <div><img src={star} alt="star icon" /></div>
                                <div className="vote_average">{el.vote_average}</div>
                            </div>
                            <Router><Link to="/"></Link><Link style={{ textDecoration: 'none', color: 'white' }} to= "/FilmPage">
                                <div className="film-title"onClick={()=>filmPage(el)} >{el.title}</div>
                            </Link>
                            </Router>
                            <button type="button" className="add-to-watchlist-btn">+ Watchlist</button>
                            <div className="additional-info">
                                <div className="trailer">
                                    <img src={play} alt="play button" className="play-button"/>  Trailer
                                </div>
                                <div>
                                    <img src={info} alt="info button" className="info-button" onClick={()=>ModalWindow(el)}/> 
                                </div>
                            </div>
                        </div>

                    </div>
                   
                </div>
            ))};
                
            </Carousel>
            </div>
            );
        } else {
            return (
                <div>Wait...</div>
            );
        }
    
    }

}

export default FilmList;