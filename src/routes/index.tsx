import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Dragon from '../pages/Dragon'
import CreateDragon from '../pages/CreateDragon'

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/createdragon" component={CreateDragon} />
        <Route path="/dragon/:id" component={Dragon} />
    </Switch>
)

export default Routes;