import React, { useState } from 'react'


export default function Bedroom(props) {
    // const [newVillager, setNewVillager] = useState({
    //     name: '',
    //     age: '',
    //     height: ''
    // })
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
        // setNewVillager({
        //     ...newVillager
        //     [e.target.name] = newVillager[e.target.value]
        // }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.addVillager(newVillager)
        props.addVillager({
            name: newVillagerName,
            age: newVillagerAge,
            height: newVillagerHeight
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type="text" 
                placeholder="enter smurf name"
                // value={newVillager.name}
                value={newVillagerName}
                onChange={handleChange}
            />
            <input 
                name="age"
                type="text" 
                placeholder="enter smurf age"
                // value={newVillager.age}
                value={newVillagerAge}
                onChange={handleChange}
            />
            <input 
                name="height"
                type="text" 
                placeholder="enter smurf height"
                // value={newVillager.height}
                value={newVillagerHeight}
                onChange={handleChange}
            />
        </form>
    )
}