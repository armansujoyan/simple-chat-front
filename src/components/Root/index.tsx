import React from 'react'
import { Switch, Route } from 'react-router'

const Root: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact/>
            <Route path='/signup'/>
        </Switch>
    )
}

export default Root;
