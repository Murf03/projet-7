import React from 'react';

import './composants.css';

export default function Thumb(props) {
    return <div className='thumb'>
        {/* <img src='' alt="Appart" /> */}
        <p>{props.title}</p>
    </div>
}