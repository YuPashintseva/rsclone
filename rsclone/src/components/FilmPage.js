import React from 'react';
import ReactDom from 'react-dom';

class FilmPage extends React.Component{
    constructor(props) {
        super(props);
        this.data = props.value;
        console.log(this.data);
    }
    render(){
        return(
            <div id = "fp">
                hello
               <div id = "upperBlock"></div>
               <div id = "photoVideo">
               <img src={`https://image.tmdb.org/t/p/original/${this.data.poster_path}`} alt={this.data.title}/>
               </div>
               <div id = "briefInfo"></div>
               <div id = "videoCarousel"></div>
               <div id = "photoCarousel"></div>
               <div id = "cast"></div>
            </div>
        )
    }
}

 export function filmPage(el){
     ReactDom.render(
     <FilmPage value={el}/> , document.getElementById("root")
     )
  
}
