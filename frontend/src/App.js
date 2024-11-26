import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/forgot_password/ForgotPassword';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';
import Category from './pages/category/Category';


function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}>
            {/* Inserir rotas restritas */}
            <Route path='/' element={<DefaultLayout><Home></Home></DefaultLayout>}/>
            <Route path='/profile' element={<DefaultLayout><Profile></Profile></DefaultLayout>}/>
            <Route path='/dashboard' element={<DefaultLayout><Dashboard></Dashboard></DefaultLayout>}/>
            <Route path='/category' element={<DefaultLayout><Category /></DefaultLayout>}/>
          </Route>
            <Route path='/login' element={<SimpleLayout><Login></Login></SimpleLayout>}/>
            <Route path='/register' element={<SimpleLayout><Register></Register></SimpleLayout>}/>
            <Route path='/forgotPassword' element={<SimpleLayout><ForgotPassword></ForgotPassword></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
   </>
  );
}

export default App;
