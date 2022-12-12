import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Explore />}/>
      <Route path='/offers' element={<Offers />}/>
      <Route path='/profile' element={<Signin />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/forgotpassword' element={<ForgotPassword />}/>
    </Routes>
    </Router>
    {/*navbar here*/}
    </>
  );
}

export default App;
