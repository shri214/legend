import { observer } from '@legendapp/state/react';
import { useContext, useEffect, useState } from 'react';
import { contextRooms } from '../contextRooms';
import { Modal } from './modal';

interface IRooms {
  rooms: number | undefined;
  guest: number;
  id?: number;
}

export const Rooms = observer(() => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [flag, setFlag] = useState(false);
  const context = useContext(contextRooms);
  // console.log(context);
  console.log(toggle);

  useEffect(() => {
    buttonDisabled();
  }, []);

  const handelModal = () => {
    setToggle(!toggle);
  };

  //use state to forceful re-render;
  const deleteRooms = () => {
    context?.deletion();
    console.log(context?.rooms.get());
    buttonDisabled();
    setToggle1(!toggle1);
  };
  // const hideModal = () => {
  //   if (toggle) {
  //     setToggle(false);
  //   }
  // };

  // window.addEventListener('click', hideModal);
  //appending rooms
  const addRooms = () => {
    let len = context?.rooms.get().length;
    let length = len && len + 1;
    let obj: IRooms = {
      rooms: length,
      guest: 1,
      id: length,
    };
    console.log(obj);
    context?.add(obj);
    buttonDisabled();
  };

  const buttonDisabled = () => {
    if (context?.rooms.get().length === 1) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };
  // maintain guest in store while inc or dec
  //whenever trigger inc or dec button this fun run and update the guest number in store and store send to p tag
  context?.addGuestNumber();

  // console.log('re render', context?.guestCounter.get());
  return (
    <>
      <div onClick={handelModal}>
        <p style={{ fontSize: '1.5rem', fontWeight: 500 }}>
          {context?.rooms.get().length} Rooms, {context?.guestCounter.get()}
          Guest
        </p>
      </div>
      <div className="listing-container">
        {toggle && (
          <div className="strong-list">
            <strong>Rooms</strong>
            <strong>Guests</strong>
          </div>
        )}
        {toggle &&
          context?.rooms.get() &&
          context?.rooms.get().map((val, ind) => {
            // console.log(context.rooms.get());
            return <Modal list={val} />;
          })}
        {toggle && (
          <div className="managing-btn">
            <button onClick={deleteRooms} disabled={flag}>
              Delete Room
            </button>
            <button onClick={addRooms}>Add Room</button>
          </div>
        )}
      </div>
    </>
  );
});
