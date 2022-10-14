import { FC } from 'react';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button } from '../../../UIKit/Button';
import { todoListSlice } from '../todoListSlice';
import { TodoListItem } from './TodoListItem';
import styles from './TodoListPage.module.scss';

export const TodoListPage: FC = () => {
  todoListSlice.hooks.useTodoListPage();

  const dispatch = useAppDispatch();

  const fetchTodoListRequest = useAppSelector(
    todoListSlice.selectors.getFetchTodoListRequest,
  );

  const deleteTodoListRequest = useAppSelector(
    todoListSlice.selectors.getDeleteTodoItemRequest,
  );

  const handleTodoItemEdit = (id: string) => {
    const path = getRoutePath('todoItemEdit', id);
    dispatch(appSlice.actions.redirect(path));
  };

  const handleTodoItemAdd = () => {
    const path = getRoutePath('todoItemAdd');
    dispatch(appSlice.actions.redirect(path));
  };

  const handleTodoItemDelete = (id: string) => {
    if (!confirm('Удалить?')) {
      return;
    }
    dispatch(todoListSlice.thunks.deleteTodoItemThunk({ id }));
  };

  return (
    <div className={styles.wrap}>
      <div>TodoListPage</div>

      <div>
        <Button onClick={handleTodoItemAdd}>Add</Button>
      </div>
      <ul className={styles.todoList}>
        {fetchTodoListRequest.data &&
          fetchTodoListRequest.data.map((todoItem, index) => (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              index={index + 1}
              onEdit={() => handleTodoItemEdit(todoItem.id)}
              onDelete={() => handleTodoItemDelete(todoItem.id)}
            />
          ))}
      </ul>
    </div>
  );
};
