import React from 'react'
import Smurf from './Smurf'

// mapperFn
function renderSmurf({name, height, age}, i) {
    return (
        <Smurf 
            key={i} 
            name={name}
            height={height}
            age={age}
        />
    )
}

export default function Village(props) {
    // useEffect, fetch smurfs, then map it!
    return props.smurfs.map(renderSmurf)
}

