import React, { Component } from 'react'
import axios from 'axios'
import UserFavorites from './UserFavorites'


class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('/api/users')
            .then(response => this.setState({ users: response.data }))
            .catch(e => console.log(e))
    }
    render() {
        const users = this.state.users;
        return (
            <ul>
                {
                    users.map(user => {
                        return (
                            <li>
                                {user.name}
                                <UserFavorites favorites={user.favorites} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Users