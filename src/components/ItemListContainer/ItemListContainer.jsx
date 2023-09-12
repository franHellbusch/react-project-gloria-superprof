import { useEffect, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import ItemList from "../ItemList/ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = () => {
  const [result, setResult] = useState([]);

  const llamadaALaApi = async () => {
    const resultado = await fetch("https://pokeapi.co/api/v2/ability/");
    const resJson = await resultado.json();
    console.log(resJson.results);
    setResult(resJson.results);
  };

  useEffect(() => {
    llamadaALaApi();
  }, []);

  return (
    <div className='w-full flex flex-wrap'>
      {result.map((element, index) => {
        return <ItemList key={index} product={element} />;
      })}
    </div>
  );
};

export default ItemListContainer;
