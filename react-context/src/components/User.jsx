import React, { useContext } from 'react'
import MyContext from '../context'

export default function User() {
    const { name } = useContext(MyContext);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
