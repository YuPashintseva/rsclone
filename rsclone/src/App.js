import './App.css';
import  FilmList  from "./components/FilmList";
function App() {
  return (
    <div className="App">
      <h1>Hi!</h1>
      <div className="films-list-wrapper">
        <div className="films-list">
          <FilmList />
        </div>
      </div>
    </div>
  ); 
}

export default App;
