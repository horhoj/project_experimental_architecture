import { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { todoListSlice } from '.';

export const useTodoListPage = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoListSlice.thunks.fetchTodoListThunks());
  }, []);
};
