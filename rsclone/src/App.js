import './App.css';
import  FilmList  from "./components/FilmList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Hi!</h1>
      <div className="d-flex justify-content-around">
        <div className="films-list">
          <FilmList />
        </div>
      </div>
    </div>
  ); 
}

export default App;
