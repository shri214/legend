import { observable } from '@legendapp/state';
export class ApiCall {
  obsPro;
  constructor() {
    this.obsPro = observable([]);
  }

  fetching = async () => {
    let res = await fetch('https://fakestoreapi.com/products');
    let result = await res.json();

    // console.log(result);
    this.obsPro.set(result);
  };
}
