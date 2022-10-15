import { FC } from 'react';
import { TodoItem } from '../../../../api/todoList';
import { Button } from '../../../../UIKit/Button';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
  todoItem: TodoItem;
  index: number;
  onEdit: () => void;
  onDelete: () => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todoItem,
  index,
  onEdit,
  onDelete,
}) => {
  const time = new Date(todoItem.timestamp).toLocaleString();

  return (
    <li className={styles.wrap}>
      <div className={styles.buttonList}>
        <Button onClick={onEdit}>edit</Button>
        <Button onClick={onDelete}>delete</Button>
      </div>
      <h3 className={styles.title}>{`${index}. ${todoItem.title} `}</h3>
      <div className={styles.timestamp}>{time}</div>
      <div>{todoItem.body}</div>
    </li>
  );
};
