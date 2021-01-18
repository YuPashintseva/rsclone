import ReactDOM from "react-dom";
import FilmList from "./components/FilmList";
import FilmPage from "./components/FilmPage";
import MovieRow from "./components/MovieRow";
import mainLogo from "./logo-imdb.png";
import rsschool from "./components/assets/rs_school_js.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch("");
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=c9ebd652172bbcdaa5b3746fa2e60207&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults);
        const results = searchResults.results;
        // console.log(results[0]);

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_path =
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            movie.poster_path;
          console.log(movie.poster_path);
          const filmDATA = JSON.parse(sessionStorage.getItem('fullInf'));
          const currFilm = filmDATA.filter(el=>el.original_title===movie.title);
          let movieRow;
          if(currFilm[0]) {
           movieRow = <MovieRow  key={movie.id} movie={movie}/>;
          }
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("failed to fetch data");
      },
    });
  }

  searchCnangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }
  changeLinkState() {
   
    
    const inp = document.querySelector('input');
    const datl = document.querySelector('#datalistOptions').childNodes;
    const filmDATA = JSON.parse(sessionStorage.getItem('fullInf'));
   
    const currFilm = filmDATA.filter(el=>el.original_title===inp.value);
   
   
    sessionStorage.setItem("val",JSON.stringify(currFilm[0]));
   
    let flag = true;
    datl.forEach(el=>{if(el.value===inp.value)flag=false})
    if(!flag&&document.querySelector("#photoVideo")&&document.querySelector('h2').innerHTML!==inp.value)window.location.reload();
    return flag;
  }


  render() {
    return (
      <div className="App">
     
          <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ margin: "3px 0" }}
          >
            <a className="navbar-brand">
              <img className="navbar-mainlogo" src={mainLogo}></img>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navb"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navb">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  
                  <Link to='/'>
                    <a className="nav-link">Watchlist</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>

              <form className="container-fluid my-2 my-lg-0">
               <Link to='/FilmPage'>
               
                <input
                  className="form-control mr-sm-2"
                  onChange={this.searchCnangeHandler.bind(this)}
                  type="text"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Search"
                  style={{ cursor: "pointer" }}
                  onClick={ (event) => {if(this.changeLinkState())event.preventDefault()}}
                />
               </Link>
                <datalist id="datalistOptions">{this.state.rows}</datalist>  
              </form>
            </div>
          </nav>

          <div id="ourRoot" className="d-flex justify-content-around">
            <div id="fl" className="films-list">
              <Route exact path="/">
                <FilmList />
              </Route>

              <Route path="/FilmPage">
                <FilmPage />
              </Route>
            </div>
          </div>
       
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4"> &copy; IMDb-clone, 2021 </div>
              <div className="col-4">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">developers:</li>
                  <li className="list-group-item">
                    <a href="https://github.com/YuPashintseva">YuPashintseva</a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://github.com/anatkig">anatkig</a>
                  </li>
                  <li className="list-group-item">
                    <a href="https://github.com/vegas-muffin">vegas-muffin</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <a
                  className="footer__link"
                  target="_blank"
                  href="https://rs.school/js/"
                >
                  <img className="footer__image" src={rsschool}></img>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
