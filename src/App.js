import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Explore />}/>
      <Route path='/offers' element={<Offers />}/>
      <Route path='/profile' element={<SignIn />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/forgotpassword' element={<ForgotPassword />}/>
    </Routes>
        <Navbar/>
    </Router>
    </>
  );
}

export default App;
