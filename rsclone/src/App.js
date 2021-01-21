import ReactDOM from "react-dom";
import FilmList from "./components/FilmList";
import FilmPage from "./components/FilmPage";
import Trailer from "./components/Trailer";
import MovieRow from "./components/MovieRow";
import mainLogo from "./logo-imdb.png";
import rsschool from "./components/assets/rs_school_js.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from "jquery";
import Watchlist from "./components/WatchList";
import Statistics from "./components/Statistics";
import GoogleAuth from "./components/GoogleAuth";

class App extends Component {
  constructor(props) {
    super(props);
    this.incrementWatchListNumber = this.incrementWatchListNumber.bind(this);
    this.decrementWatchListNumber = this.decrementWatchListNumber(this);
    this.state = {watchlist: 0};
    this.performSearch("");
    
  }

  incrementWatchListNumber(filmid) {
    
    let arr = JSON.parse(localStorage.getItem('films'));
    if (arr) {
      if (! arr.includes(filmid)) {
        this.setState({watchlist: this.state.watchlist + 1});
      }
    } else {
      this.setState({watchlist: this.state.watchlist + 1});
    }   
  }

  decrementWatchListNumber() {
    //without it nothing worked
    localStorage.setItem('films',JSON.stringify([]));
    let currentNum =  JSON.parse(localStorage.getItem('films')).length/2;
    if (currentNum > 1) {
      currentNum -= 1;
      this.setState({watchlist: currentNum});
    }
    
  }

  defineNumberWatchList() {
    if (localStorage.getItem('films')) {
      this.setState({watchlist: JSON.parse(localStorage.getItem('films')).length/2});
    }
  }

  componentDidMount() {
    this.defineNumberWatchList();
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

        var movieRows = [];

        results.forEach((movie) => {
          movie.poster_path =
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
            movie.poster_path;
          console.log(movie.poster_path);
          const filmDATA = JSON.parse(sessionStorage.getItem("fullInf"));
          const currFilm = filmDATA.filter(
            (el) => el.original_title === movie.title
          );
          let movieRow;
          if (currFilm[0]) {
            movieRow = <MovieRow key={movie.id} movie={movie} />;
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
    const inp = document.querySelector("input");
    const datl = document.querySelector("#datalistOptions").childNodes;
    const filmDATA = JSON.parse(sessionStorage.getItem("fullInf"));

    const currFilm = filmDATA.filter((el) => el.original_title === inp.value);

    sessionStorage.setItem("val", JSON.stringify(currFilm[0]));

    let flag = true;
    datl.forEach((el) => {
      if (el.value === inp.value) flag = false;
    });
    if (
      !flag &&
      document.querySelector("#photoVideo") &&
      document.querySelector("h2").innerHTML !== inp.value
    )
      window.location.reload();
    return flag;
  }

  render() {
    return (
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ margin: "3px 0" }}
        >

          <div className="header-wrapper">
            <div className="collapse navbar-collapse" id="navb">
              <div className="navb-wrapper-wrapper">
                <div className="navb-wrapper">
                  <a className="navbar-brand">
                    <Link to='/'>
                      <div className="main-img-wrapper"><img className="navbar-mainlogo" src={mainLogo}></img></div>
                    </Link>
                  </a>
                  <form className="container-fluid my-2 my-lg-0">
                    <Link to="/FilmPage">
                      <input
                        className="form-control mr-sm-2"
                        onChange={this.searchCnangeHandler.bind(this)}
                        type="text"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Search"
                        style={{ cursor: "pointer" }}
                        onClick={(event) => {
                          if (this.changeLinkState()) event.preventDefault();
                        }}
                      />
                    </Link>
                    <datalist id="datalistOptions">{this.state.rows}</datalist>
                  </form>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link style={{ textDecoration: 'none' }} to= "/WatchList">
                        <a className="nav-link"><div className="wl">WatchList <div className="watchlist-num">{this.state.watchlist}</div></div></a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Settings</a>
                    </li>
                    <li className="nav-item">
                      <Link to = "/Statistics">
                        <a className="nav-link">Statistics</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      
                        <GoogleAuth />
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div id="ourRoot" className="d-flex justify-content-around">
          <div id="fl" className="films-list">
          <Route exact path="/">
              <FilmList watchListincrement = {this.incrementWatchListNumber} />
            </Route>
            
            <Route path="/FilmPage">
              <FilmPage />
            </Route>

            <Route path="/WatchList">
             <Watchlist watchListdecrement = {this.decrementWatchListNumber}/>
            </Route>

            <Route path="/Statistics">
             <Statistics />
            </Route>
            <Route path="/Trailer">
              <Trailer />
           </Route>
          </div>
        </div>

        <footer className="bg-dark text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase yellow-text"> The Rolling Scopes School</h5>
                <p>
                  Бесплатный курс «JavaScript/Front-end» от сообщества The
                  Rolling Scopes -{" "}
                  <a
                    className="footer__link"
                    target="_blank"
                    href="https://rs.school/js/"
                  >
                    rs.school/js
                  </a>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase"></h5>
                <div>
                  <img className="footer__image" src={rsschool}></img>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0 yellow-text">Developed by:</h5>

                <ul className="list-unstyled">
                  <li>
                    <a className="" href="https://github.com/YuPashintseva">
                      YuPashintseva
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://github.com/anatkig">
                      anatkig
                    </a>
                  </li>
                  <li>
                    <a className="" href="https://github.com/vegas-muffin">
                      vegas-muffin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            {" "}
            &copy; 2021 Copyright{" "}
            <a className="text-dark" href="#">
              IMDb-clone
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
