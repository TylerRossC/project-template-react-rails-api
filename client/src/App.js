import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Logout from './components/Logout'
import CreateBlock from './components/CreateBlock'
import {useState, useEffect} from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'

const App = () => {

  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [blocks, setBlocks] = useState({})

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }

  const stateInitializer = () => {
    checkSessionId()
  }

  const checkSessionId = () => {
    fetch('/me')
    .then(res => res.json())
    .then(data => setCurrentUser(data.user))
  }

  const handleNewBlock = (data) => {
    data.errors ? setErrors(data.errors) : setBlocks([...blocks, data.block])
    if(!data.errors){
      history.push('/home')
      setErrors([])
    }
  }
    
  useEffect(stateInitializer, []);

  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <h1>
      { currentUser ? `Hello ${currentUser.username}!` : null}
      </h1>
      <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />  
        </Route>
        <Route path='/login'>
          <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route path='/logout'>
          <Logout setCurrentUser={setCurrentUser}/>
        </Route>
        <Route path='/blocks/new'>
          <CreateBlock handleNewBlock={handleNewBlock} errors={errors}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
