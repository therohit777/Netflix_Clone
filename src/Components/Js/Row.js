import React, { useState , useEffect } from 'react'
import axios from "./axios";
import "../Css/row.css";




const base_url = "https://image.tmdb.org/t/p/original"


function Row({title,fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");


  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData()
  }, [fetchUrl])

 

  const clickopt=(movie)=>{
    if (trailerUrl) {
      settrailerUrl('')
    } else {
      
      fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=6&q=movie trailer${(movie?.title || movies?.name || movies?.original_name ||"")}&key=AIzaSyBxsZcBe2MJOQO3lllZuqyesjbdajJesJo`)
      .then(response=>response.json())
      .then(data=>{
          settrailerUrl(data.items[0].id.videoId);
          console.log(data);
      })
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
    
        {trailerUrl && <iframe src={`https://www.youtube.com/embed/${trailerUrl}?autoplay=1`} allow="autoplay" title='vid' className="videodisplay"/>}
        
    </div>

  )
}

export default Row 