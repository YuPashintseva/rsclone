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
const FilmList = () => {
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
        itemClass="carousel-item-padding-test"
        centerMode={false}
      >
        <div>
            <div className="films-list-img">
                <img src="https://image.tmdb.org/t/p/original/eDJYDXRoWoUzxjd52gtz5ODTSU1.jpg"/>
                <div>rating</div>
            </div>
        </div>
        
        <div>
            <div className="films-list-img">
                <img src="https://image.tmdb.org/t/p/original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg"/>
                <div>rating</div>
            </div>
        </div>
        
        <div>
            <div className="films-list-img">
                <img src="https://image.tmdb.org/t/p/original/51JxCk77ZCqLzbLkrDl9Qho6KUh.jpg"/>
                <div>rating</div>
            </div>
        </div>
      </Carousel>
    );
}

export default FilmList;