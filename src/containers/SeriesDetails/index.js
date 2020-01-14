import React, { Component } from 'react';

import Loader from '../../components/loader';

class SeriesDetails extends Component {

    state = {
        show: null
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json}));
    }

    render() {

        const { show } = this.state;
        console.log(show);

        return (
            <div>
                {show === null && <Loader />}
                {
                    show !== null
                    &&
                    <div> 
                        <h2>{show.name}</h2>

                        <p>Premiere - {show.premiered} </p>
                        <p>Rating - {show.rating.average} </p>
                        <p>{show._embedded.episodes.length} episodes</p>

                        <img alt="Show" src={show.image.medium} />
                    </div>
                }
            </div>
        )
    }
}

export default SeriesDetails;