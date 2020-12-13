import React from 'react';

import './Result.css';

const result = props => {
    return <ul>{props.books.map(book => { 
    return <div key={book.volumeInfo.id}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        <li>{book.volumeInfo.title}</li>
        <li>{book.volumeInfo.authors}</li></div>
    })}</ul>
};

export default result;