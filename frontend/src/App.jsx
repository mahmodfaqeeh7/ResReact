import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

function App() {

  //const users = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="App">
      <BrowserRouter>
       {//<Navbar />
       }
        <div className="pagess">
          <Routes>
            <Route 
              path="/" 
              element={ <Home /> } 
            />
            <Route 
              path="/login" 
              element={ <Login />} 
            />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
