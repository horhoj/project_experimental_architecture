import { actions, reducer } from './slice';
import * as selectors from './selectors';
import * as hooks from './hooks';
import * as thunks from './thunks';

export const todoListSlice = {
  actions,
  reducer,
  selectors,
  hooks,
  thunks,
} as const;
