import React from 'react';

import loaderSrc from '../../assets/jar-loading.gif';

const Loader = props => (
    <div>
        <img style={{ width: 125 }} src={loaderSrc} alt="Loading Icon"/>
    </div>
);

export default Loader;
