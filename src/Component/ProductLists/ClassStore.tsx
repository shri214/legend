import { observable } from '@legendapp/state';
interface IItems {
  name: string;
  id: number;
  imgUrl: string;
  rating: number;
  description: string;
  quantity?: number;
}

export class CartModel {
  ovsObj;
  constructor() {
    this.ovsObj = observable<IItems[]>([]);
  }

  add = (newProduct: any) => {
    this.ovsObj.set((prev) => [...prev, newProduct]);
  };
}
