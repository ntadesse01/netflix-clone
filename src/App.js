
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      />

    <Row title="Trending New"fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries Movies" fetchUrl={requests.fetchNetflixOriginals}/>
     </div>
  );
}

export default App;



  // https://netflix-june-1f588.web.app 
  // google-site-verification: googlef06b7f9703bb56c1.html




  