import React from 'react'

const ThingFavorites = ({ favorites }) => {
    return (
        <ul>
            {
                favorites.map(favorite => {
                    return (
                        <li>
                            Favorited by: {favorite.user.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ThingFavorites