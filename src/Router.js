import {Route, Switch} from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Clients from './pages/Clients'
import Products from './pages/Products'


export default function Router(){
   return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin/clientes' component={Clients} />
            <Route exact path='/admin/products' component={Products} />
        </Switch>
    )
}