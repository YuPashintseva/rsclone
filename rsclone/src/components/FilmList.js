import React, { createRef } from 'react';
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
import FilmPage from "./FilmPage.js";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
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
        this.state = {data: [], value: "", showHide: false, currFilmInfo: {}};
        this.handleModalShowHide = this.handleModalShowHide.bind(this);
        this.handleModalShowHide2 = this.handleModalShowHide2.bind(this);

    }

    async componentDidMount() {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fb0fcc2d34caffc53da53d676fbf678a&language=en-US&page=1');
        const json = await response.json();
        this.setState({ data: json});
        console.log(this.state.data.results)
    }

    returnState(){
        return this.state;
    }

    handleModalShowHide(film) {
        this.setState({ showHide: !this.state.showHide });
        this.setState({ currFilmInfo: film });
    }

    handleModalShowHide2() {
        this.setState({ showHide: !this.state.showHide });
    }


    render() {
        let mod = '';
        if (this.state.data.results) {
            if (this.state.showHide) {
                mod = <ModalWindow handleModalShowHide = {this.handleModalShowHide2} filmInfo = {this.state.currFilmInfo} />
            }
            return (
                <div>
                {mod}
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
                
                <div element={el.id} key ={el.id}>
                    <div className="films-list-img App-link" >
                      <Link to="/" ></Link> <Link style={{ textDecoration: 'none', color: 'white' }} to= "/FilmPage" > 
                            <img className="poster-img" onMouseOver={()=> {sessionStorage.clear();sessionStorage.setItem("val",JSON.stringify(el))}}  src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} alt={el.title}/>
                            </Link>    
                       
                        <div className="bottom-content-wrapper">
                            <div className="rating">
                                <div><img src={star} alt="star icon" /></div>
                                <div className="vote_average">{el.vote_average}</div>
                            </div>
                            <Link to="/"></Link><Link style={{ textDecoration: 'none', color: 'white' }} to= "/FilmPage">
                                <div className="film-title" onMouseOver={()=>{ sessionStorage.clear();sessionStorage.setItem("val",JSON.stringify(el))}}>{el.title}</div>
                            </Link>
                            
                            <button type="button" className="add-to-watchlist-btn">+ Watchlist</button>
                            <div className="additional-info">
                                <div className="trailer">
                                    <img src={play} alt="play button" className="play-button"/>  Trailer
                                </div>
                                <div>
                                    <img src={info} alt="info button" className="info-button" onClick = {() => this.handleModalShowHide(el)}/> 
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