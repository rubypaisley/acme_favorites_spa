import React, { Component } from 'react'
import axios from 'axios'
import ThingFavorites from './ThingFavorites'

class Things extends Component {
    constructor() {
        super();
        this.state = {
            things: []
        }
    }
    componentDidMount() {
        axios.get('/api/things')
            .then(response => this.setState({ things: response.data }))
            .catch(e => console.log(e))
    }
    render() {
        const things = this.state.things;
        return (
            <ul>
                {
                    things.map(thing => {
                        return (
                            <li>
                                {thing.name}
                                <ThingFavorites favorites={thing.favorites} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Things