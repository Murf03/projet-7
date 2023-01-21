import React from 'react';

import './composants.css';

export default function Tag(props) {
    return <div className='tag'>
        {props.title}
    </div>
}