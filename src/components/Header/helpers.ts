import { TArrayItem } from './model';

// the name of a file can be as an example utils.ts instead of helpers.ts
// the point is to TAKE off some calculations / mappings / operations into a separate module, than export them
// be sure you're saving them into CORRECT place. Why?
// if something like mapArray will be used ONLY at the same level, it's OK,
// otherwise LIFT UP the function definition in folder utils/helpers (the way to name must be corresponding)

export const mapArray = (item: TArrayItem) => item.prop > 5;
