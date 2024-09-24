import {Routes,Route} from 'react-router-dom'
import './pages/Home'
import './pages/Pay'
import './pages/Delivery'
import { Home } from './pages/Home'
import { Pay } from './pages/Pay'
import { Delivery } from './pages/Delivery'
import { Default } from  './layouts/Default'

export function Router(){
    return(
        <Routes>
            
                <Route path='/' element={<Default/>}>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/pay' element = {<Pay/>}/>
                    <Route path='/delivery' element = {<Delivery/>}/>
                </Route>
            
        </Routes>
    )
}
