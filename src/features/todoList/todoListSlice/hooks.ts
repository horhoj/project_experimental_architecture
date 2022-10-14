import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../store/hooks';
import { todoListSlice } from '.';

export const useTodoListPage = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(todoListSlice.thunks.fetchTodoListThunk());
  }, []);
};

export const useTodoItemPage = (): string | null => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(todoListSlice.thunks.fetchTodoItemThunk({ id: id ?? '' }));
    return () => {
      dispatch(todoListSlice.actions.fetchTodoItemRequestClear());
      dispatch(todoListSlice.actions.patchTodoItemRequestClear());
    };
  }, []);

  return id ?? null;
};
