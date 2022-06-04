import './App.css';
import Row from './Components/Js/Row';
import requests from './Components/Js/requests'
import Banner from './Components/Js/Banner';
import Nav from './Components/Js/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />    
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
