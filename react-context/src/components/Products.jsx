import React, { useContext } from 'react'
import MyContext from '../context'
import Test from './Test';


export default function Products() {
    const { age } = useContext(MyContext);
    return (
        <div>
            <h1>Products :{age}</h1>
            <Test />
        </div>
    )
}
