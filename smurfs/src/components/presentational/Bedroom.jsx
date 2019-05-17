import React, { useState } from 'react'


export default function Bedroom(props) {
    const [newVillager, setNewVillager] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = (e) => {
        setNewVillager({
            ...newVillager
            [e.target.id] = newVillager[e.target.value]
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addVillager(newVillager)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input 
                id="name"
                type="text" 
                placeholder="enter smurf name"
                value={newVillager}
                onChange={handleChange}
            />
            <label for="age">Age</label>
            <input 
                id="age"
                type="text" 
                placeholder="enter smurf age"
                value={newVillager}
                onChange={handleChange}
            />
            <label for="height">Height</label>
            <input 
                id="height"
                type="text" 
                placeholder="enter smurf height"
                value={newVillager}
                onChange={handleChange}
            />
        </form>
    )
}