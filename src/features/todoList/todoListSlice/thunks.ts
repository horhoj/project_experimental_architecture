import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../api';
import { SLICE_NAME } from './types';

export const fetchTodoListThunks = createAsyncThunk(
  `${SLICE_NAME}/fetchTodoListThunks`,
  async () => {
    const response = await api.todoList.fetchTodoList();

    return response;
  },
);
