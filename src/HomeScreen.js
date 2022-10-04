import React from 'react'
import './HomeScreen.css'
import {Nav} from "./Nav"
import { Banner } from './Banner'
import { requests } from './Request'
import { Row } from './Row'



export const HomeScreen = () => {
  return (
    <div className='homeScreen'>
       <Nav/>
      

      <Banner/>


     <Row 
     title = 'NETFLIX ORIGINALS'
     fetchUrl = {requests.fetchNetflixOriginals}
     isLargeRow
     />
      <Row 
     title = 'TRENDING NOW'
     fetchUrl = {requests.fetchTrending}
     isLargeRow
     />
      <Row 
     title = 'TOP RATED'
     fetchUrl = {requests.fetchTopRated}
     isLargeRow
     />
      <Row 
     title = 'ROMANCE MOVIES'
     fetchUrl = {requests.fetchRomanceMovies}
     isLargeRow
     />
      <Row 
     title = 'HORROR MOVIES'
     fetchUrl = {requests.fetchHorrorMovies}
     isLargeRow
     />
      <Row 
     title = 'DOCUMENTARIES'
     fetchUrl = {requests.fetchDocumentaries}
     isLargeRow
     />
      <Row 
     title = 'COMEDY MOVIES'
     fetchUrl = {requests.fetchComedyMovies}
     isLargeRow
     />
      <Row 
     title = 'ACTION MOVIES'
     fetchUrl = {requests.fetchActionMovies}
     isLargeRow
     />

    </div>
  )
}
