import { Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import GridCards from '../commons/GridCards';
import MainImage from '../Sections/MainImage';
import MovieInfo from '../Sections/MovieInfo';
import Favorite from './Sections/Favorite';

{/* <a href={`/movie/${props.movieId}`}></a> */ }
function MovieDetail(props) {


    let movieId = props.match.params.movieId

    const [Movie, setMovie] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ActorToggle, setActorToggle] = useState(false)

    console.log(Movie,"Movie");

    const welcomeHelmet = "환영합니다";

    useEffect(() => {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                // console.log(response, "asdkdlaskl")
                setMovie(response)
            })


        fetch(endpointCrew)
            .then(response => response.json())
            .then(response => {
                console.log(response, "cast볼거양")
                setCasts(response.cast)
                console.log('http://image.tmdb.org/t/p/w500', response.cast.profile_path);
            })
    }, [])

    const ToggleActorView = () => {
        setActorToggle(!ActorToggle)
    }

    return (
        <>
        <Helmet>
            <title>
                Movie | {Movie.original_title ? Movie.original_title : welcomeHelmet}
            </title>
        </Helmet>
        <div>
            {/* Header */}
            {Movie &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.original_title}
                    text={Movie.overview}
                />
            }
            {/* body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite 
                        movieInfo={Movie}
                        movieId={movieId}
                        userFrom={localStorage.getItem('userId')}
                    />
                </div>
                {/* Movie Info */}
                <MovieInfo
                    movie={Movie}
                />
                <br />
                {/* 버튼이 생겼다가 사라졌다가 하게해야지 */}
                {ActorToggle &&
                    < div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                        <button onClick={ToggleActorView}>Toggle Actor View</button>
                    </div>
                }



                {/* 출연진 */}
                <Row gutter={[16, 16]}>
                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                image={cast.profile_path ?
                                    `${IMAGE_BASE_URL}w500${cast.profile_path}` : `https://www.bloter.net/wp-content/uploads/2016/08/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0-%EC%82%AC%EC%A7%84-765x519.jpg`
                                }
                                characterName={cast.name}
                            />
                        </React.Fragment>
                    ))}
                </Row>
            </div>
        </div >
        </>
    )
}

export default MovieDetail
