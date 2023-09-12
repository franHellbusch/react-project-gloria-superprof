import ItemCounter from "../ItemCounter/ItemCounter";

const ItemList = ({ product }) => {
  const onAdd = (number) => {
    console.log(number);
  };

  return (
    <div className='w-1/5 h-44 flex flex-col items-center'>
      <h1>{product.name}</h1>
      <ItemCounter stock={10} initial={0} onAdd={onAdd} />
    </div>
  );
};

export default ItemList;
