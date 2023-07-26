import { useState } from 'react';
import './modal.scss';
import { useContext } from 'react';
import { observer } from '@legendapp/state/react';
import { contextRooms } from '../contextRooms';

interface IArr {
  Rooms: number;
  Guest: number;
}

export const Modal: React.FC<{ list: IArr | any }> = observer(({ list }) => {
  console.log(list);
  //using list.guest because when ever we toggle it does not get it initial position else it get

  const [guest, setGuest] = useState(list.guest);

  const context = useContext(contextRooms);
  const changeGuestNumber = (op: string) => {
    if (guest < 3 && op === '+') {
      // context?.addingCounter();
      setGuest(guest + 1);
    } else if (guest > 1 && op === '-') {
      setGuest(guest - 1);
      // context?.deletingCounter();
    }
  };
  context?.updateGuest(guest, list.id);
  return (
    <div className="functionality">
      <p>Room {list.id}</p>
      <div className="btns">
        <button onClick={() => changeGuestNumber('+')}>+</button>
        <span>{guest}</span>
        <button onClick={() => changeGuestNumber('-')}>-</button>
      </div>
    </div>
  );
});
