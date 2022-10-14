import { FC } from 'react';
import { TodoItemData } from '../../../api/todoList';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { RequestErrorView } from '../../../UIKit/RequestErrorView';
import { TodoItemForm } from '../TodoItemForm';
import { todoListSlice } from '../todoListSlice';
import styles from './TodoItemAddPage.module.scss';

const DEFAULT_TODO_VALUES: TodoItemData = {
  title: '',
  body: '',
};

export const TodoItemAddPage: FC = () => {
  const dispatch = useAppDispatch();

  const addTodoItemRequest = useAppSelector(
    todoListSlice.selectors.getAddTodoItemRequest,
  );

  const handleSubmit = (values: TodoItemData) => {
    dispatch(todoListSlice.thunks.addTodoItemThunk({ todoItemData: values }));
  };

  const handleCancel = () => {
    const path = getRoutePath('todoList');
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      <div>TodoItemAddPage</div>
      {addTodoItemRequest.error && (
        <RequestErrorView
          requestError={addTodoItemRequest.error}
          errorTitle={'Ошибка добавления данных по элементу'}
        />
      )}
      <TodoItemForm
        todoItemData={DEFAULT_TODO_VALUES}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};
