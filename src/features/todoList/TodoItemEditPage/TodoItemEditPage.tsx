import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RequestErrorView } from '../../../UIKit/RequestErrorView';
import { todoListSlice } from '../todoListSlice';
import { TodoItemForm } from '../TodoItemForm';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { TodoItem, TodoItemData } from '../../../api/todoList';
import styles from './TodoItemEditPage.module.scss';
import * as helpers from './helpers';

export const TodoItemPage: FC = () => {
  const id = todoListSlice.hooks.useTodoItemPage();

  const dispatch = useAppDispatch();

  const fetchTodoItemRequest = useAppSelector(
    todoListSlice.selectors.getFetchTodoItemRequest,
  );

  const patchTodoItemRequest = useAppSelector(
    todoListSlice.selectors.getPatchTodoItemRequest,
  );

  const todoItemData = helpers.getTodoItemData(fetchTodoItemRequest.data);

  const handleSubmit = (values: TodoItemData) => {
    if (!id) {
      return;
    }
    const todoItem: TodoItem = { ...values, id };
    dispatch(todoListSlice.thunks.patchTodoItemThunk({ todoItem }));
  };

  const handleCancel = () => {
    const path = getRoutePath('todoList');
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      <div>TodoItemPage</div>
      {fetchTodoItemRequest.error && (
        <RequestErrorView
          requestError={fetchTodoItemRequest.error}
          errorTitle={'Ошибка получения данных по элементу!'}
        />
      )}

      {patchTodoItemRequest.error && (
        <RequestErrorView
          requestError={patchTodoItemRequest.error}
          errorTitle={'Ошибка обновления данных по элементу!'}
        />
      )}

      {fetchTodoItemRequest.data && todoItemData && (
        <TodoItemForm
          todoItemData={todoItemData}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};
