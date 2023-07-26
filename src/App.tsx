import React, { useRef } from 'react';
// import { Counter, TsLearning } from './Component/TsLearning';
// import ProductList from './Component/ProductLists';
// import { CartContext } from './Component/ProductLists/CreateContext';
import { contextRooms } from './OyoComponents/contextRooms';

import Page from './OyoComponents/Page';
import { roomStore } from './OyoComponents/Header/roomStore';
// import { CartModel } from './Component/ProductLists/ClassStore';
function App() {
  // const myRef = useRef(new CartModel()).current;

  const roomsRef = useRef(new roomStore()).current;
  // console.log('app file', roomsRef.rooms.get()[0].guest);
  return (
    <>
      {/* <TsLearning />
      <Counter /> */}
      {/* <CartContext.Provider value={myRef}>
        <ProductList />
      </CartContext.Provider> */}

      {/* ============= */}
      <contextRooms.Provider value={roomsRef}>
        <Page />
      </contextRooms.Provider>
    </>
  );
}

export default App;
