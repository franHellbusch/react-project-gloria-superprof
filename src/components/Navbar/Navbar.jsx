import CartWidget from "./components/CartWidget/CartWidget";
// import styles from "./styles/styles.module.scss";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 bg-neutral-300'>
      <img
        className='w-20'
        src='https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png'
        alt='logo-icon'
      />
      <ul className='flex'>
        <li className='mx-5'>Home</li>
        <li className='mx-5'>AboutMe</li>
        <li className='mx-5'>Contact</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
