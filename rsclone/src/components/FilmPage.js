import React from 'react';
import ReactDom from 'react-dom';
import star from './assets/megastar.png';
class FilmPage extends React.Component{
    constructor(props) {
        super(props);
        this.data = props.value;
        console.log(this.data);
    }
    render(){
        return(
            <div id = "fp" className="wrapper wrapperStyle">
               
               <div id = "upperBlock" className="wrapper">
                 <div className="row"></div>
                 <div className="row">Main Info:

                     <h1 className="col">{this.data.original_title}</h1>
                     <h3 className="col">Average Vote: {this.data.vote_average}
                     <img src={star}></img>
                     </h3>
                      
                     <h3 className="col">Votes: {this.data.vote_count}</h3>
                 </div>
               </div>

               <div id = "briefInfo" className="wrapper">
                   <div>Release Date: {this.data.release_date}</div>
                   <div></div>
                   </div>

               <div id = "photoVideo"className="row">
                   
               <img width="75%" height ="auto" src={`https://image.tmdb.org/t/p/original/${this.data.poster_path}`} alt={this.data.title}/>
                <div style={{ maxWidth: "20%", margin: "8px"}}><h3 >Synopsis: {this.data.overview}</h3></div>
               </div>

             
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
    );
}
