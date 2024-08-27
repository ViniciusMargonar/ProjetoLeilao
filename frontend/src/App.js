import './App.css';
import {BrowserRouter, Route, Routes} from  'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';


function App() {
  return (
   <>
    {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter/>}>
            {/* Inserir rotas restritas */}
            <Route path='/' element={<DefaultLayout><Home></Home></DefaultLayout>}/>
          </Route>
            <Route path='/login' element={<SimpleLayout><Login></Login></SimpleLayout>}/>
            <Route path='/register' element={<SimpleLayout><Register></Register></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
    {/* <Footer/> */}
   </>
  );
}

export default App;
