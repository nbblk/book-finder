import React from 'react';

import './Form.css';

const form = props => {
    return <form onSubmit={props.click}>
    <input type="text" placeholder="Enter a title" onChange={props.change}></input>
    <button type="submit">Find</button>
  </form>;
};

export default form;