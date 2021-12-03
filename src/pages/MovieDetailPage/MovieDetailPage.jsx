import Movies from '../Movies/Movies';
import * as moviesAPI from '../../utilities/movies-api';
import { useEffect } from 'react/cjs/react.development';

export default function MovieDetailPage({idx, setMovieId}) {
   console.log(idx)
    // useEffect(function(){
    //     async function movieDetail(movieId){
    //         console.log(movieId);
    //         const movie = await moviesAPI.detail(movieId);
    //         setMovieId(movie);
    //         console.log(movieId)
    //     }
    //     movieDetail();
    // },[])
    
    // async function movieDetail(idx){
    //       const movie = await moviesAPI.detail(idx);
    //       const movieIdx= movie[0]
    //       setMovieId(movieIdx);
    //     }

    return(
        <>
            <h1>{idx}</h1>
        </>
    )
}