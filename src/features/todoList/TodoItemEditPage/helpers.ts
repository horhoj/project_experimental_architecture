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
