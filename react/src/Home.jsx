import React from 'react'
import HomeChild from './HomeChild'

export default function Home({ username, monage }) {

    return (
        <div>
            <h1>JE SUIS LE HOME et je suis : {username} et j'ai {monage} ans </h1>

            <HomeChild username={username} monage={monage} />
        </div>
    )
}
