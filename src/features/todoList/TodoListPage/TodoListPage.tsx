import { FC } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { todoListSlice } from '../todoListSlice';
import { TodoListItem } from './TodoListItem';
import styles from './TodoListPage.module.scss';

export const TodoListPage: FC = () => {
  todoListSlice.hooks.useTodoListPage();

  const fetchTodoListRequest = useAppSelector(
    todoListSlice.selectors.getFetchTodoListRequest,
  );

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
            />
          ))}
      </ul>
    </div>
  );
};
