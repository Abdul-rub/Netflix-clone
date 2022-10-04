import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from "axios"

export const Row = ({title,fetchUrl,isLargeRow=false}) => {
   const [movies,setMovies]= useState([])

   const base_url="https://image.tmdb.org/t/p/original/";

 const fetchData=()=>{
    const request = axios.get(fetchUrl)
    .then((request)=>{
        setMovies(request.data.results);
    })
    return request
 }


   useEffect(()=>{
    fetchData()
   },[fetchUrl])

   console.log(movies)

  return (
    <div className='row'>
        <h2>{title}</h2>

       <div className='row__posters'>
        {movies.map((movie)=>(


            <img
             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
             src={`${base_url}${
                isLargeRow? movie.poster_path:movie.backdrop_path
            }`} alt={movie.name} />
        ))}
        </div>
        </div>
  )
}
