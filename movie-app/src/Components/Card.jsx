import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';



const card = (props) => {
    return (
      <div>
         <ul>
        {props.movies.map(movie => (
          <li key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </li>
        ))}
      </ul>
      </div>
    )
    
} 


export default card;