import  FilmList  from "./components/FilmList";
import FilmPage from "./components/FilmPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/custom.css';


function App() {
  return (
    <div className="App">
      <h1>It will be a header</h1>
      <div id="ourRoot" className="d-flex justify-content-around">
        <div className="films-list">
          <FilmList />
        </div>
      </div>
    </div>
  ); 
}

export default App;
