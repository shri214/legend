import React from 'react';
import { Interface } from 'readline';
import { observable } from '@legendapp/state';
import { observer } from '@legendapp/state/react';

export const TsLearning = () => {
  let name: string = 'Shriram';
  interface IAdd {
    village: string;
    pin?: number;
    frnds: Array<string | number>;
  }

  interface IUser {
    name: string;
    id: number;
    address?: IAdd;
  }

  let obj: IUser = {
    name: 'Rakesh',
    id: 274402,
    address: {
      village: 'mainpur',
      frnds: ['vijay', 'rahul', 76],
    },
  };
  return (
    <div>
      <h1>ts learning file</h1>
      <p>{name}</p>
      <p>
        `{obj.name} and {obj.id}
        {obj.address?.frnds[2]}`
      </p>
    </div>
  );
};

let count = observable(0);

export const Counter = observer(() => {
  console.log(count.peek());

  const inc = () => {
    count.set((oldCount) => oldCount + 1);
  };
  return (
    <div>
      <h1>observer Component</h1>
      <br />
      <br />
      <button onClick={inc}>Increase</button>
      <br />
      <br />
      <h1>{count.get()}</h1>

      <Visualization num={count.peek()} />
    </div>
  );
});

export const Visualization: React.FC<{ num: number }> = React.memo(
  ({ num }) => {
    console.log(num);

    return (
      <div>
        <h1>{num}</h1>
      </div>
    );
  }
);
