import React, { Component } from 'react';

import SeriesList from '../../components/SeriesList';
import Loader from '../../components/loader/index';
import Intro from '../../components/intro/index';

class Series extends Component {

    state = {
        series: [],
        seriesName: '', 
        fetching: false
    }

    onSeriesInputChange = e => {

        this.setState({ seriesName: e.target.value, fetching: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({series: json, fetching: false}));

    }

    render() {
        const {series, seriesName, fetching} = this.state;

        return (
            <div>
                <Intro message="Here you can find all of your most loved series" />
                <p>{this.state.series.length} series found.</p>

                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
                </div>

                { 
                    !fetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Start searching by name using the input</p>
                }
                {   
                    !fetching && series.length === 0 && seriesName.trim() !==''
                    &&
                    <p>No tv series have been found with this name</p>
                }
                {
                    fetching && <Loader />
                }
                {
                    !fetching && <SeriesList list={this.state.series}/> 
                }
                
            </div>
        );
    }
}

export default Series;