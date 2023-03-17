import React, { useContext } from 'react'
import MyContext from '../context'



export default function Categories() {
    const { age, name } = useContext(MyContext);
    return (
        <div>Categories :{age} - {name}</div>
    )
}
