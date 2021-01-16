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

class App extends Component {
  //console.log(sessionStorage.getItem("val"))

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
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
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

  render() {
    return (
      <div className="App">
        <Router>
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
                  <Link to="/FilmPage"> </Link>
                  <Link to="/">
                    {" "}
                    <a className="nav-link">Home</a>
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
                <input
                  className="form-control mr-sm-2"
                  onChange={this.searchCnangeHandler.bind(this)}
                  type="text"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Search"
                />

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
        </Router>

        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase"> The Rolling Scopes School</h5>
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
                <h5 className="text-uppercase mb-0">Developed by:</h5>

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

/*
export function filmPage(el) {
  ReactDOM.render(
    <FilmPage value={el}/>,document.getElementById('ourRoot')
  )
}
*/
export default App;
