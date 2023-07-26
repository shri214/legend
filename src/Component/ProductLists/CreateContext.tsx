import { createContext } from 'react';
import { CartModel } from './ClassStore';

export const CartContext = createContext<CartModel | null>(null);
