import React from 'react';
import ReactDom from 'react-dom';
import star from './assets/megastar.png';
class FilmPage extends React.Component{
    constructor(props) {
        super(props);
        this.data = props.value;
        this.state = {video:""};
      
    }
    async componentDidMount(){
     const response = await fetch(`https://api.themoviedb.org/3/movie/${this.data.id}/videos?api_key=fb0fcc2d34caffc53da53d676fbf678a&language=en-US`);
     const res = await response.json();
     this.setState({ video: res.results[0].key});
     console.log(this.state)
    }
    
    render(){
       
        return(
            
            <div id = "fp" className=" container-fluid wrapper wrapperStyle">
               
               <div id = "upperBlock" className="wrapper">
                 <div className="row"></div>
                 <div className="row">

                     <h1 className="col">{this.data.original_title}</h1>
                     <div className="col">
                     <h3 className="row">Average Vote: {this.data.vote_average}
                     <img src={star}></img>
                     </h3>
                     </div>
                     <h3 className="col">Votes: {this.data.vote_count}</h3>
                 </div>
               </div>

               <div id = "briefInfo" className="wrapper">
                   <div>Release Date: {this.data.release_date}</div>
                   <div></div>
                </div>

               <div id = "photoVideo" className="row" >
                   
               <img  width="40%"height ="auto" src={`https://image.tmdb.org/t/p/original/${this.data.poster_path}`} alt={this.data.title}/>
               <iframe  width="60%" height ="100%" src={`https://www.youtube.com/embed/${this.state.video}`}></iframe>
               </div>
               <div style={{  margin: "8px"}}><h3 >Synopsis: {this.data.overview}</h3></div>
             
               <div id = "videoCarousel" className="wrapper"></div>
               <div id = "photoCarousel" className="wrapper"></div>
               <div id = "cast"></div>
            </div>
        )
    }
}

 export function filmPage(el){
     ReactDom.render(
     <FilmPage value={el}/> , document.getElementById("ourRoot")
     )
  
}
