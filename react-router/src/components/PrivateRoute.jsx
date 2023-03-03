import React from 'react'

export default function PrivateRoute({ children, loggedIn }) {
    return loggedIn == true ? children : <h1>Vous n'avez pas accés ici</h1>
}
