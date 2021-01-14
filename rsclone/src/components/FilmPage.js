import React from 'react';

import star from './assets/megastar.png';
import FilmList from './FilmList';


 class FilmPage extends React.Component{
    constructor() {
        super();
        this.state = {video:"",dat:JSON.parse(sessionStorage.getItem("val"))};
      console.log(this.state.dat)
        //this.data = props.value;
    }
    async componentDidMount(){
     const response = await fetch(`https://api.themoviedb.org/3/movie/${this.state.dat.id}/videos?api_key=fb0fcc2d34caffc53da53d676fbf678a&language=en-US`);
     const res = await response.json();
     this.setState({ video: res.results[0].key});
     this.setState({dat: JSON.parse(sessionStorage.getItem("val"))});
     //console.log(this.state)
    }

    render(){
       
        return(
            
            <div id = "fp" className=" container-fluid wrapper wrapperStyle">
               
               <div id = "upperBlock" className="wrapper">
                 <div className="row"></div>
                 <div className="row">

                     <h1 className="col">{this.state.dat.original_title}</h1>
                    
                     
                     <h3 className="col-auto">Average Vote: {this.state.dat.vote_average}
                     <img src={star} ></img>
                     </h3>
                     
                     
                     <h3 className="col-auto">Votes: {this.state.dat.vote_count}</h3>
                
               </div>
               </div>
               <div id = "briefInfo" className="wrapper">
                   <div>Release Date: {this.state.dat.release_date}</div>
                   <div></div>
                </div>

               <div id = "photoVideo" className="row" >
                   
               <img id="im" width="40%" height ="auto" src={`https://image.tmdb.org/t/p/original/${this.state.dat.poster_path}`} alt={this.state.dat.title}/>
               <iframe  width="60%" height="auto" src={`https://www.youtube.com/embed/${this.state.video}`}></iframe>
               </div>
               <div style={{  margin: "8px"}}><h3 >Synopsis: {this.state.dat.overview}</h3></div>
             
               <div id = "videoCarousel" className="wrapper"></div>
               <div id = "photoCarousel" className="wrapper"></div>
               <div id = "cast"></div>
            </div>
        )
    }
}


export default FilmPage;