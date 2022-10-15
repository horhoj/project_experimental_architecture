import { TodoItem, TodoItemData } from '../../../api/todoList';

export const getTodoItemData = (
  todoItem: TodoItem | null,
): TodoItemData | null => {
  if (todoItem) {
    const todoItemData: TodoItemData = {
      body: todoItem.body,
      title: todoItem.title,
    };

    return todoItemData;
  }

  return null;
};

export const timeStampToLocalString = (timestamp: number): string =>
  new Date(timestamp).toLocaleString();
