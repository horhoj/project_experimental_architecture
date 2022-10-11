import { delay } from '../utils/delay';
import { getUUID } from '../utils/getUUID';

const TODO_LIST_DATA_LS_KEY = 'TODO_LIST_DATA_LS_KEY';
const DELAY = 300;

export interface TodoItem {
  id: string;
  title: string;
  body: string;
}

const createDefaultTodoListData = (): void => {
  const currentTodoDataStringify = localStorage.getItem(TODO_LIST_DATA_LS_KEY);
  if (currentTodoDataStringify === null) {
    const defaultTodoListData: TodoItem[] = [
      { id: getUUID(), title: 'title 01', body: 'body 01' },
      { id: getUUID(), title: 'title 02', body: 'body 02' },
      { id: getUUID(), title: 'title 03', body: 'body 03' },
    ];

    const defaultTodoListDataStringify = JSON.stringify(defaultTodoListData);

    localStorage.setItem(TODO_LIST_DATA_LS_KEY, defaultTodoListDataStringify);
  }
};

const bootstrap = async () => {
  await delay(DELAY);
  createDefaultTodoListData();
};

const getTodoListData = (): TodoItem[] => {
  const todoListStr = localStorage.getItem(TODO_LIST_DATA_LS_KEY);
  if (todoListStr === null) {
    return [];
  }
  const todoList: TodoItem[] = JSON.parse(todoListStr);

  return todoList;
};

export const fetchTodoList = async (): Promise<TodoItem[]> => {
  await bootstrap();

  const todoList = getTodoListData();

  return Promise.resolve(todoList);
};
