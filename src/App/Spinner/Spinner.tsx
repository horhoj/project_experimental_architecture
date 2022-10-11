import React, { FC } from 'react';
import { todoListSlice } from '../../features/todoList/todoListSlice';
import { useAppSelector } from '../../store/hooks';

import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const todoListSliceIsLoading = useAppSelector(
    todoListSlice.selectors.isLoading,
  );

  const isLoading = todoListSliceIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
