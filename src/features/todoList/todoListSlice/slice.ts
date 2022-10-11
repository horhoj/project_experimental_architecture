import { createSlice } from '@reduxjs/toolkit';
import { TodoItem } from '../../../api/todoList';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '../../../store/helpers';
import { RequestSliceStateProperty } from '../../../store/types';
import { SLICE_NAME } from './types';
import * as thunks from './thunks';

interface InitialState {
  fetchTodoListRequest: RequestSliceStateProperty<TodoItem[]>;
}

const initialState: InitialState = {
  fetchTodoListRequest: makeRequestSliceStateProperty<TodoItem[]>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchTodoListThunks,
      'fetchTodoListRequest',
    );
  },
});
