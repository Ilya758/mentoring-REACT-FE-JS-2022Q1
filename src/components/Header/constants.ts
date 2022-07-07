import { v4 } from 'uuid';
import { mapArray } from './helpers';

// so here we store required enums / constants if they're using by CURRENT component

export enum HeaderConstants {
  name = 'name',
}

export const array = Array(10)
  .fill(null)
  .map((_, ndx) => ({
    prop: ndx,
    id: v4(),
  }))
  .filter(mapArray);
