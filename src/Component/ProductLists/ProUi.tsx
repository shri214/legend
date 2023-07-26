import { useContext, useState } from 'react';
import { items } from './AddedItem';
import { CartContext } from './CreateContext';

interface IItems {
  name: string;
  id: number;
  imgUrl: string;
  rating: number;
  description: string;
}

const ProUi: React.FC<{ list: IItems }> = ({ list }) => {
  const [count, setCount] = useState(1);

  const cartRef = useContext(CartContext);
  // console.log(list);
  const addingStart = () => {
    let payload = { ...list, quantity: count };
    cartRef?.add(payload);
  };
  // const addingStart = () => {
  //   let payload = { ...list, quantity: count };
  //   items.set((prev) => [...prev, payload]);
  //   console.log(items.get());
  // };

  return (
    <div key={list.id}>
      <h1>{list.name}</h1>
      <p>{list.rating}</p>
      <h1>item added : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
      <button onClick={addingStart}>Add to cart</button>
    </div>
  );
};
export default ProUi;
