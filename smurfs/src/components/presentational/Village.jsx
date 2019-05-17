import React, { useEffect } from 'react'
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
    useEffect(() => {
        props.gatherVillage()
    }, [])

    if (props.smurfs.length === 0) {
        return <h2>Gathering smurf village...</h2>
    } else {
        return props.smurfs.map(renderSmurf)
    }
}

