import React from 'react';

import './composants.css';

export default function Title(props) {
    return <div className='title'>
        <p className='loc-title'>{props.title}</p>
        <p className='loc-location'>{props.location}</p>
    </div>
}