import { createContext } from 'react';
import { roomStore } from './Header/roomStore';
export const contextRooms = createContext<roomStore | null>(null);
