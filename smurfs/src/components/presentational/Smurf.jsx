import React from 'react'

export default function Smurf(props) {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  )
}

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
}

export default Smurf

