import React, { useContext } from 'react'
import MyContext from '../context'

export default function Test() {
    const { age } = useContext(MyContext);
    return (
        <div>
            <h1>Composant Test :{age}</h1>
        </div>
    )
}
