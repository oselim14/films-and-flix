import Movies from '../Movies/Movies';
import * as moviesAPI from '../../utilities/movies-api';
import { useEffect, useState } from 'react/cjs/react.development';
import {useParams} from 'react-router-dom';
import './MovieDetailPage.css';

export default function MovieDetailPage() {
    
    const [viewMovie, setViewMovie] = useState(null);
    const {id: movieId} = useParams();

    const IMDB_LINK = `https://www.imdb.com/title/${movieId}/?ref_=fn_al_tt_1`
  
    console.log(movieId);

    useEffect(function(){
        async function movieDetail(){
            const movie = await moviesAPI.detail(movieId);
            setViewMovie(movie);
        }
        movieDetail();
    },[])

    if (!viewMovie) return null;
    return(
        <>
            <div className="TeamAndPic">
                <div className="TitleCard">   
                    <h1>{viewMovie.title}</h1> 
                    <div className="Team">
                        <h4 className="Directors">
                            <span className="DirectorsTitle">Directors</span><br />
                            {viewMovie.directorList.map(d =>
                                <div>{d.name}</div>
                                )}</h4>
                        <h4 className="Writers">
                        <span className="WritersTitle">Writers</span><br />
                            {viewMovie.writerList.map((w)=>
                                <div>{w.name}</div>
                            )}
                            </h4>
                        <h4 className="Cast">
                        <span className="CastTitle">Cast</span><br />
                            {viewMovie.starList.map((s)=>(
                                <div>{s.name}</div>
                            ))}</h4>
                    </div>
                </div> 
                <aside>
                    <img src={viewMovie.image} alt={viewMovie.title} width="500"/>
                    <a href={IMDB_LINK} target="_blank">Find it on IMDB</a>
                </aside>
            </div>
            <h4>{viewMovie.plot}</h4>
        </>
    )
}