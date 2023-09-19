import CartWidget from "../CartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate("/products");
  };

  return (
    <div className='flex items-center justify-between px-10 py-5 bg-slate-400'>
      <ul className='flex'>
        <li className='mx-5 text-zinc-50'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mx-5 text-zinc-50'>
          <button onClick={navigateToProducts}>Productos</button>
        </li>
        <li className='mx-5 text-zinc-50'>Contacto</li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
