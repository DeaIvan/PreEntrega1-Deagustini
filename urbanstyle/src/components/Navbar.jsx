import '../App.css'
import CartWidget from './CartWidget.jsx';

function Navbar(){
  return (
      <nav className="nav">
        <a className="logo" href="index.html">
            URBANSTY.<span>LE</span>
        </a>
        <ul className="enlaces">
            <li><a href="#">Productos</a></li>
            <li><a href="#">Zapatillas</a></li>
            <li><a href="#">Remeras</a></li>
            <li><a href="#">Pantalones</a></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default Navbar;
