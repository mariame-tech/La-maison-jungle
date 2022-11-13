
import './styles/app.css';
import Header from './Components/Header';
import ShoppingList from './Components/ShoppingList';
import Cart from './Components/Cart';
import Description from './Components/Description';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app">
       <Header>
       
       <img src={logo} alt="La maison jungle" className='title-logo' />
        <h1 className='lmj-title'> La maison jungle </h1>
        </Header>
       <ShoppingList/>
       <Cart/>
       <Description/>
    </div>
  );
  
}

export default App;

