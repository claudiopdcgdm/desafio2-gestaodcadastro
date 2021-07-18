import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

export default function Router(){
   return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}