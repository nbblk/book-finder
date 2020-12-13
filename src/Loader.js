import React from 'react';

import './Loader.css';

const loader = () => {
    return <div data-testid="loader" className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
};

export default loader;

