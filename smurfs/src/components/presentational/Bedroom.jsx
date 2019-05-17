import React, { useState } from 'react'


export default function Bedroom(props) {
    const [newVillagerName, setNewVillagerName] = useState('')
    const [newVillagerAge, setNewVillagerAge] = useState('')
    const [newVillagerHeight, setNewVillagerHeight] = useState('')

    const handleChange = (e) => {
        switch(e.target.name) {
            case "name":
                setNewVillagerName(e.target.value)
                break
            case "age": 
                setNewVillagerAge(e.target.value)
            case "height":
                setNewVillagerHeight(e.target.value)
            default: 
                console.warn('what the Gargamel are you doing bro')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addVillager({
            name: newVillagerName,
            age: newVillagerAge,
            height: newVillagerHeight
        })
        
        // reset fields
        setNewVillagerName('')
        setNewVillagerAge('')
        setNewVillagerHeight('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type="text" 
                placeholder="enter smurf name"
                value={newVillagerName}
                onChange={handleChange}
                />
            <input 
                name="age"
                type="text" 
                placeholder="enter smurf age"
                value={newVillagerAge}
                onChange={handleChange}
                />
            <input 
                name="height"
                type="text" 
                placeholder="enter smurf height"
                value={newVillagerHeight}
                onChange={handleChange}
                />
            <button role="submit">+</button>
        </form>
    )
}