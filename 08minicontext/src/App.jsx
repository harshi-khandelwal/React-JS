
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import UserConextProvider from './context/UserContextProvider'

function App() {
 

  return (
    <UserConextProvider>
      <h1>React with context api </h1>
      <Login/>
      <Profile/>
    </UserConextProvider>
  )
}

export default App
