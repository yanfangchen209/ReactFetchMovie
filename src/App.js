
import './App.css';
import Movielist from './components/Movielist';
import React, {useState} from 'react';

function App() {

  /*
  const allmovies = [
    {title:'dummy movie 1',
    releaseDate: '2021-03-10',
    movieSummary: "dummy movie 1 content"
    },
    {title:'dummy movie 2',
    releaseDate: '2000-03-08',
    movieSummary: "dummy movie 2 content"
    },
  ];
  */
 const [movies, setMovies] = useState([]);
 

  async function fetchHandler(){
    const response  = await fetch('https://swapi.dev/api/films/');
    if(response.ok){
      //convert response data to js object 
      const dataGot = await response.json();
      const responseData = dataGot.results;


      //transform js object to the form you want
      const loadedMovies = transformData(responseData);
      setMovies(loadedMovies);

    }
    
  }//end of function fetchHandler()

  //js array map(arrow function to operate on each element of array)
  const transformData = (responseData) => {
      return responseData.map((item) => ({
        title: item.title,
        movieSummary: item.opening_crawl,
        releaseDate: item.release_date,
      }))}
      

  return (
    <div className="App">
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <Movielist movies={movies}/>
      </section>


    </div>
  );
}

export default App;
