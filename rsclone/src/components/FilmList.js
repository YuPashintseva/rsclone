import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding"
                centerMode={false}
            >
            
            {this.state.data.results.map(el => (
                <div>
                    <div className="films-list-img">
                        <img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} />
                        <div>rating</div>
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