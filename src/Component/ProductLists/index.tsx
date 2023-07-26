import { AddedItem } from './AddToCart';
import { objectsArray } from './ProItemsList';
import ProUi from './ProUi';
import { ApiCall } from './ApiFetching';
import { useEffect, useRef } from 'react';
import { observer } from '@legendapp/state/react';
import Pui from './Pui';

const ProductList = observer(() => {
  // console.log(objectsArray);
  const proRef = useRef(new ApiCall()).current;

  useEffect(() => {
    proRef.fetching();
  }, []);
  console.log(proRef?.obsPro.get().length);
  let pro = proRef?.obsPro.get();

  if (pro.length <= 0) {
    return <h1>loading....</h1>;
  }
  console.log(pro);

  return (
    <div>
      <AddedItem />
      {objectsArray.map((val) => {
        return (
          <>
            <ProUi list={val} />
          </>
        );
      })}

      {pro.map((val) => {
        return <Pui prod={val} />;
      })}
    </div>
  );
});
export default ProductList;
