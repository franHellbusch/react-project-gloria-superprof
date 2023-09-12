import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemCounter = ({ stock, initial, onAdd }) => {
  const [productNumber, setProductNumber] = useState(initial);

  const sum = () => {
    productNumber < stock && setProductNumber(productNumber + 1);
  };

  const restar = () => {
    productNumber > 0 && setProductNumber(productNumber - 1);
  };

  return (
    <div className='custom-number-input h-10 w-32'>
      <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
        <button
          onClick={restar}
          data-action='decrement'
          className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
        >
          <span className='m-auto text-2xl font-thin'>−</span>
        </button>
        <span className='d-flex justify-center outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none'>
          {productNumber}
        </span>
        <button
          onClick={sum}
          data-action='increment'
          className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
        >
          <span className='m-auto text-2xl font-thin'>+</span>
        </button>
      </div>
      <button
        onClick={() => onAdd(productNumber)}
        className='w-full mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'
      >
        Agregar a carrito
      </button>
    </div>
  );
};

export default ItemCounter;
