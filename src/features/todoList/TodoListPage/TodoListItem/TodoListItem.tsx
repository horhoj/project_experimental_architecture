import { FC } from 'react';
import { TodoItem } from '../../../../api/todoList';
import { Button } from '../../../../UIKit/Button';
import styles from './TodoListItem.module.scss';

interface TodoListItemProps {
  todoItem: TodoItem;
  index: number;
  onEdit: () => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todoItem,
  index,
  onEdit,
}) => {
  return (
    <li className={styles.wrap}>
      <h3 className={styles.title}>{`${index}. ${todoItem.title} `}</h3>
      <div>
        <Button onClick={onEdit}>edit</Button>
      </div>
      <div>{todoItem.body}</div>
    </li>
  );
};
