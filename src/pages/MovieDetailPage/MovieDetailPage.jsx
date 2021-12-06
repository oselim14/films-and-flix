import Movies from '../Movies/Movies';
import * as moviesAPI from '../../utilities/movies-api';
import { useEffect, useState } from 'react/cjs/react.development';
import {useParams} from 'react-router-dom';
import './MovieDetailPage.css';
import MyReviews from '../MyReviews/MyReviews';
import UserReviewForm from '../../components/UserReviewForm/UserReviewForm'

export default function MovieDetailPage() {
    
    const [viewMovie, setViewMovie] = useState(null);
    const {id: movieId} = useParams();

    const IMDB_LINK = `https://www.imdb.com/title/${movieId}/?ref_=fn_al_tt_1`

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
                <aside>
                    <img src={viewMovie.image} alt={viewMovie.title} width="500"/>
                    <a href={IMDB_LINK} target="_blank">Find it on IMDB</a>
                </aside>
                    <div className="right-side">
                <div className="TitleCard">   
                    <h1>{viewMovie.title}</h1> 
                    <div className="Team">
                        <h4 className="Directors">
                            <span className="DirectorsTitle">Directors</span><br />
                                <div>{viewMovie.directors}</div>
                            </h4>
                        <h4 className="Writers">
                        <span className="WritersTitle">Writers</span><br />
                                <div>{viewMovie.writers}</div>
                            </h4>
                        <h4 className="Cast">
                        <span className="CastTitle">Cast</span><br />
                                <div>{viewMovie.stars}</div>
                        </h4>
                    </div>
                </div> 
            <h4 className="Plot"><span className="PlotTitle">Plot</span><br/>{viewMovie.description}</h4>
            <UserReviewForm viewMovie={viewMovie} setViewMovie={setViewMovie} />
            </div>
            </div>
        </>
    )
}