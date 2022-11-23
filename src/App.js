
import './styles/app.css';
import { useState } from 'react';
import Header from './Components/Header';
import ShoppingList from './Components/ShoppingList';
import Cart from './Components/Cart';
// import Description from './Components/Description';
import logo from './assets/logo.png'
// import QuestionForm from './Components/QuestionForm';
import Footer from './Components/Footer';
import './styles/Layout.css'

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div className="app">
       <Header>
       
       <img src={logo} alt="La maison jungle" className='title-logo' />
        <h1 className='lmj-title'> La maison jungle </h1>
        </Header>
        <div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart}/>
          <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
       
       
       {/* <Description/> */}
       {/* <QuestionForm/> */}
       <Footer/>
    </div>
  );
  
}

export default App;

