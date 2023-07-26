import { useContext } from 'react';
import { items } from './AddedItem';
import { observer } from '@legendapp/state/react';
import { CartContext } from './CreateContext';

export const AddedItem = observer(() => {
  // console.log(items.get());
  console.log('render again');
  const cartRef = useContext(CartContext);
  // console.log(cartRef?.ovsObj.get()[0].quantity);

  return (
    <div>
      {/* <h1>cart item {items.get().length}</h1> */}

      <h1>{cartRef?.ovsObj.get().length}</h1>
    </div>
  );
});
