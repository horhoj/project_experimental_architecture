import { FC } from 'react';
import { getRoutePath } from '../../../router';
import { appSlice } from '../../../store/app';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';
import { TodoListItem } from './TodoListItem';
import styles from './TodoListPage.module.scss';

export const TodoListPage: FC = () => {
  todoListSlice.hooks.useTodoListPage();

  const dispatch = useAppDispatch();

  const fetchTodoListRequest = useAppSelector(
    todoListSlice.selectors.getFetchTodoListRequest,
  );

  const handleTodoItemEdit = (id: string) => {
    const path = getRoutePath('todoItem', id);
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      <div>TodoListPage</div>
      <ul className={styles.todoList}>
        {fetchTodoListRequest.data &&
          fetchTodoListRequest.data.map((todoItem, index) => (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              index={index + 1}
              onEdit={() => handleTodoItemEdit(todoItem.id)}
            />
          ))}
      </ul>
    </div>
  );
};
