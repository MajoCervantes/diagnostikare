import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

//Components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Login from './views/Auth/Login'
import Client from './views/Client/Client'
import Profile from './views/Client/Profile'
import Schedule from './views/Client/Schedule/Schedule'
import Appointment from './views/Client/Appointment/Appointment'
import Doctors from './views/Doctors/Doctors'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/doctors" component={Doctors} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
