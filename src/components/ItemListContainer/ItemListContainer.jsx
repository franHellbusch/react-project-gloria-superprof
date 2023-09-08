import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  const [result, setResult] = useState([])
  // let resultadoSinState = []

  const llamadaALaApi = async () => {
    const resultado = await fetch('https://pokeapi.co/api/v2/ability/')
    const resJson = await resultado.json()
    console.log(resJson.results)
    setResult(resJson.results)
  }
  
  return <>
    {greeting}
    <button onClick={llamadaALaApi}>llamar a la api</button>
    {result.map((elemento, index) => <h1 key={index}>{elemento.name}</h1> )}
  </>;
};

export default ItemListContainer;
