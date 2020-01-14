import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const SeriesListItem = ({ series }) => (

    <li > <Link to={`series/${series.show.id}`}> {series.show.name} </Link> </li>
)

const SeriesList = (props) => {

    return (
        <div>
            <ul className="series-list">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;