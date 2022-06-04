import React, { useState , useEffect } from 'react'
import axios from "./axios";
import "../Css/row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Row({title,fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  
  const base_url = "https://image.tmdb.org/t/p/original"

  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
    autoplay: 1,
    }
  }

  const clickopt=(movie)=>{
    if (trailerUrl) {
      settrailerUrl('')
    } else {
      movieTrailer(movie?.title || movies?.name || movies?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  return (
    <div className='rows'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie =>(
                <img 
                   key={movie.id}
                   onClick={()=>clickopt(movie)}
                   className={`rowpos ${isLargeRow && "row_large"}`}
                   src={`${base_url}${(isLargeRow)?movie.poster_path:movie.backdrop_path}`} 
                   alt={movie.name} 
                />
            ))}
        </div>
    
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>

  )
}

export default Row 