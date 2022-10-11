import { TodoItem } from '../../../api/todoList';
import { RequestSliceStateProperty, RootState } from '../../../store/types';

export const isLoading = (state: RootState): boolean =>
  state.todoList.fetchTodoListRequest.isLoading;

export const getFetchTodoListRequest = (
  state: RootState,
): RequestSliceStateProperty<TodoItem[]> => state.todoList.fetchTodoListRequest;
