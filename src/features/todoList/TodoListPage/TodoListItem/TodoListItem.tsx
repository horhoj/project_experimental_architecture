import { FC } from 'react';
import { TodoItem } from '../../../../api/todoList';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
  todoItem: TodoItem;
  index: number;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todoItem, index }) => {
  return (
    <li className={styles.wrap}>
      <h3 className={styles.title}>{`${index}. ${todoItem.title} `}</h3>
      <div>{todoItem.body}</div>
    </li>
  );
};
