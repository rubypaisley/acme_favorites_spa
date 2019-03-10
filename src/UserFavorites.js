import React from 'react'

const UserFavorites = ({ favorites }) => {
    return (
        <ul>
            {
                favorites.map(favorite => {
                    return (
                        <li>
                            {favorite.thing.name} (Ranked: {favorite.rank})
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default UserFavorites