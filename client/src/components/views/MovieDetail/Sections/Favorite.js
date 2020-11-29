import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';

function Favorite(props) {


    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0);
    const [Favorited, setFavorited] = useState(false);

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime
    }

    useEffect(() => {
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                setFavoriteNumber(response.data.favoriteNumber)
                if (response.data.success) {
                    console.log(response.data)
                } else {
                    alert("실패이!")
                }
            })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.favorited);
                } else {
                    alert("정보를 가져오는데 실패했다!")
                }
            })
    }, [])

    const onClickFavorite = () => {
        if (Favorited) {
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber-1)
                        setFavorited(!Favorited)
                    } else {
                        alert("FavoriteList지우는거 실패")
                    }
                })
        }
        else {
            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert("FavoriteList추가하는거 실패")
                    }
                })
        }
    }

    return (
            <div>
                <Button onClick={onClickFavorite}>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber}</Button>
            </div>
    )
}

export default Favorite
