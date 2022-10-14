import { TodoItem } from '../../../api/todoList';
import { RequestSliceStateProperty, RootState } from '../../../store/types';

export const isLoading = (state: RootState): boolean =>
  state.todoList.fetchTodoListRequest.isLoading ||
  state.todoList.fetchTodoItemRequest.isLoading ||
  state.todoList.patchTodoItemRequest.isLoading ||
  state.todoList.addTodoItemRequest.isLoading ||
  state.todoList.deleteTodoItemRequest.isLoading;

export const getFetchTodoListRequest = (
  state: RootState,
): RequestSliceStateProperty<TodoItem[]> => state.todoList.fetchTodoListRequest;

export const getFetchTodoItemRequest = (
  state: RootState,
): RequestSliceStateProperty<TodoItem> => state.todoList.fetchTodoItemRequest;

export const getPatchTodoItemRequest = (
  state: RootState,
): RequestSliceStateProperty<unknown> => state.todoList.patchTodoItemRequest;

export const getAddTodoItemRequest = (
  state: RootState,
): RequestSliceStateProperty<unknown> => state.todoList.addTodoItemRequest;

export const getDeleteTodoItemRequest = (
  state: RootState,
): RequestSliceStateProperty<unknown> => state.todoList.deleteTodoItemRequest;
