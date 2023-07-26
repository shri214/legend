import { observable } from '@legendapp/state';
interface IRooms {
  rooms: number | undefined;
  guest: number;
  id?: number;
}

export class roomStore {
  rooms;
  guestCounter;
  storeForNext;
  constructor() {
    this.rooms = observable<IRooms[]>([{ rooms: 1, guest: 1, id: 1 }]);
    this.guestCounter = observable<number>(0);
    this.storeForNext = observable();
  }

  addGuestNumber() {
    let guestCount = 0;
    this.rooms.get().map((val) => {
      guestCount += val.guest;
    });
    this.guestCounter.set(guestCount);
  }
  updateGuest(num: number, id: number) {
    let updatedValue = this.rooms.get().map((val) => {
      if (val.id === id) {
        return { ...val, guest: num };
      }
      return val;
    });

    this.rooms.set(() => [...updatedValue]);
  }

  add(obj: IRooms) {
    this.rooms.set((oldObj) => [...oldObj, obj]);
  }

  deletion() {
    console.log('length of rooms', this.rooms.get().length);
    if (this.rooms.get().length > 1) {
      let copy = this.rooms.get();
      copy.length = copy.length - 1;
      this.rooms.set(() => [...copy]);
    }
  }
}
