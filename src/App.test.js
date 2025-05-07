import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getproducts from './components/Getproduct';
import Addproducts from './components/Addproducts';

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">
        <h1>Sokogarden - Buy & Sell online</h1>
      </header>
      {/* Below link will be visible on the website. When clicked they will direct you to the different components */}
      <nav>
        <Link to={'/'} className='links'>Get Products</Link>
        <Link to={'/addproducts'} className='links'>Add Products</Link>
        <Link to={'/signin'} className='links'>Signin</Link>
        <Link to={'/signup'} className='links'>Signup</Link>
      </nav>

      {/* Below we create routes and map different components onto the routes */}
      <Routes>
        <Route path='/' element={<Getproducts/>} />
        <Route path='/addproducts' element={<Addproducts/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/makepayment' element={<Makepayment/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
