import './App.css'
import { Switch, Route, useLocation } from 'react-router-dom'
import Cards from "./pages/Cards/Cards";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import { ArrowLeft } from '@material-ui/icons'


function App() {

  const { pathname } = useLocation()

  return (
      <div className="h-full">
        <div className="flex items-center justify-center h-32">
          <div className="font-extra-bold">
            {pathname.substr(pathname.lastIndexOf('/') + 1, ).toUpperCase() &&
            <a href={'/'} className="animate-bounce">
              <ArrowLeft />
            </a>
            }
            { pathname.substr(pathname.lastIndexOf('/') + 1, ).toUpperCase() || 'HOME' }
          </div>
        </div>
        <div className="mx-auto mb-10 container border rounded">
          <Switch>
            <Route path="/cards">
              <Cards/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
  )
}

export default App;
