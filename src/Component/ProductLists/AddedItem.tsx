import { observable } from '@legendapp/state';

interface IItems {
  name: string;
  id: number;
  imgUrl: string;
  rating: number;
  description: string;
}

export const items = observable<IItems[]>([]);
