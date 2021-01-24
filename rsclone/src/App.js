import ReactDOM from "react-dom";
import FilmList from "./components/FilmList";
import FilmPage from "./components/FilmPage";
import Trailer from "./components/Trailer";
import MovieRow from "./components/MovieRow";
import mainLogo from "./logo-imdb.png";
import rsschool from "./components/assets/rs_school_js.svg";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $, { contains } from "jquery";
import Watchlist from "./components/WatchList";
import Statistics from "./components/Statistics";
import GoogleAuth from "./components/GoogleAuth";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.incrementWatchListNumber = this.incrementWatchListNumber.bind(this);
    this.decrementWatchListNumber = this.decrementWatchListNumber.bind(this);
    this.clearWatchList = this.clearWatchList.bind(this);
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

  clearWatchList(e, data) {
    e.preventDefault();
    localStorage.setItem('films',JSON.stringify([]));
    this.setState({watchlist: 0});
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
        
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img className="navbar-mainlogo" src={mainLogo}></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">
                  <Link style={{ textDecoration: "none" }} to="/WatchList">
                    <a className="nav-link">
                      WatchList{" "}
                      <span className="badge badge-pill text-dark bg-warning">
                        {this.state.watchlist}
                      </span>
                    </a>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <a className="nav-link">Settings</a>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Statistics">
                    <a className="nav-link">Statistics</a>
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <GoogleAuth />
                </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

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
