import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { TodoItem, TodoItemData } from '../../../api/todoList';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { SLICE_NAME } from './types';

export const fetchTodoListThunks = createAsyncThunk(
  `${SLICE_NAME}/fetchTodoListThunks`,
  async () => {
    const response = await api.todoList.fetchTodoList();

    return response;
  },
);

interface FetchTodoItemPayload {
  id: string;
}

export const fetchTodoItemThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchTodoItemThunk`,
  async ({ id }: FetchTodoItemPayload) => {
    return api.todoList.fetchTodoItem({ id });
  },
);

interface PatchTodoItemThunk {
  todoItem: TodoItem;
}

export const patchTodoItemThunk = createAsyncThunk(
  `${SLICE_NAME}/patchTodoItemThunk`,
  async ({ todoItem }: PatchTodoItemThunk, { dispatch }) => {
    await api.todoList.patchTodoItem({ todoItem });
    const path = getRoutePath('todoList');
    dispatch(appSlice.actions.redirect(path));
  },
);

interface AddTodoItemThunkPayload {
  todoItemData: TodoItemData;
}

export const addTodoItemThunk = createAsyncThunk(
  `${SLICE_NAME}/AddTodoItemThunk`,
  async ({ todoItemData }: AddTodoItemThunkPayload, { dispatch }) => {
    await api.todoList.addTodoItem({ todoItemData });
    const path = getRoutePath('todoList');
    dispatch(appSlice.actions.redirect(path));
  },
);
