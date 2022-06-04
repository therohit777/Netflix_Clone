import React, { useEffect, useState } from 'react'
import requests from './requests';
import axios from './axios';
import "../Css/banner.css";

function Banner() {
  const [movies, setmovies] = useState([])

  useEffect(() => {
      async function fetchData(){
          const request = await axios.get(requests.fetchTrending )
          setmovies( request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
          return request
      }
      fetchData();
  }, [])
   
  console.log(movies)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  let stylesheet = {
      "backgroundSize": "cover",
      "backgroundImage": `url("https://image.tmdb.org/t/p/original${movies?.backdrop_path}")`,
      "backgroundPosition": "center center"
  }

  return (
    <header className="Banner" style = {stylesheet}>
        <div className="Banner_contents">
            <h1 className='Banner_title'>{movies?.title || movies?.name || movies?.original_name}</h1>
            <div className="Banner_buttons">
                <button className="Banner_button">Play</button>
                <button className="Banner_button">My List</button>
            </div>
            <h1 className="Banner_desc">
                {truncate(movies?.overview,150)}
            </h1>
        </div>
        <div className="banner-fadebottom"></div>
    </header>
  )
}

export default Banner