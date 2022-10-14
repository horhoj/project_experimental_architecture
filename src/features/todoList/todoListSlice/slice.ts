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
  fetchTodoItemRequest: RequestSliceStateProperty<TodoItem>;
  patchTodoItemRequest: RequestSliceStateProperty<unknown>;
  addTodoItemRequest: RequestSliceStateProperty<unknown>;
  deleteTodoItemRequest: RequestSliceStateProperty<unknown>;
}

const initialState: InitialState = {
  fetchTodoListRequest: makeRequestSliceStateProperty<TodoItem[]>(),
  fetchTodoItemRequest: makeRequestSliceStateProperty<TodoItem>(),
  patchTodoItemRequest: makeRequestSliceStateProperty<unknown>(),
  addTodoItemRequest: makeRequestSliceStateProperty<unknown>(),
  deleteTodoItemRequest: makeRequestSliceStateProperty<unknown>(),
};

export const { actions, reducer } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    fetchTodoItemRequestClear: (state) => {
      state.fetchTodoItemRequest.data = null;
      state.fetchTodoItemRequest.error = null;
    },
    patchTodoItemRequestClear: (state) => {
      state.patchTodoItemRequest.data = null;
      state.patchTodoItemRequest.error = null;
    },
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchTodoListThunk,
      'fetchTodoListRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchTodoItemThunk,
      'fetchTodoItemRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.patchTodoItemThunk,
      'patchTodoItemRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.addTodoItemThunk,
      'addTodoItemRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.deleteTodoItemThunk,
      'deleteTodoItemRequest',
    );
  },
});
