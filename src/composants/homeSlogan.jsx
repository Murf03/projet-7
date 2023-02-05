import React from 'react';

import '../css/composants.css';

export default function HomeSlogan(props) {
    return <div className='home-slogan'>
        <div>
            <p>{props.text}</p>
        </div>
    </div>
}