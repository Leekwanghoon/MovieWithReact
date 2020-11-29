import React, { useEffect, useState } from 'react';
import './favorite.css';
import Axios from 'axios';
import { Popover } from 'antd';
import { IMAGE_BASE_URL } from '../../Config';
import Helmet from "react-helmet";
function FavoritePage() {

    const [Favorites, setFavorites] = useState([])

    useEffect(() => {

        fetchFavoredMovie()
    }, [])

    const fetchFavoredMovie = () => {
        Axios.post('/api/favorite/getFavoriteMovie', { userFrom: localStorage.getItem('userId') })
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setFavorites(response.data.favorites)
                } else {
                    alert("영화정보를 가져오는데 실패했습니다")
                }
            })
    }

    const onClickDelete = (movieId, userFrom) => {


        const variables = {
            movieId,
            userFrom
        }
        
        Axios.post('/api/favorite/removeFromFavorite', variables)
            .then(response => {
            if (response.data.success) {
                fetchFavoredMovie()
            } else {
                alert("리스트에서 지우는데 실패했다")
            }
        })
    }


    const renderCards = Favorites.map((favorite, index) => {

        const content = (
            <div>
                {favorite.moviePost ?
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no Image"
                }
            </div>
        )

        return (
            <tr key={index}>
                <Popover content={content} title={`${favorite.movieTitle}`}>
                    <td>{favorite.movieTitle}</td>
                </Popover>
                <td>{favorite.movieRunTime}</td>
                <td>
                    <button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>remove</button>
                </td>
            </tr>
        );
    })



    return (
        <>
        <Helmet>
                <title>
                    Movie | Your Favorite Movie Page 
                </title>
        </Helmet>
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <h2>Favorite Movies</h2>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCards}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default FavoritePage
