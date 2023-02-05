import React from 'react';

import '../css/composants.css';

export default function Tag(props) {
    return <div className='tag'>
        {props.title}
    </div>
}