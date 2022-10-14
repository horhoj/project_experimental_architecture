import { delay } from '../utils/delay';
import { getUUID } from '../utils/getUUID';

const TODO_LIST_DATA_LS_KEY = 'TODO_LIST_DATA_LS_KEY';
const DELAY = 300;

export interface TodoItemData {
  title: string;
  body: string;
}

export interface TodoItem extends TodoItemData {
  id: string;
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

const saveTodoListData = (todoListData: TodoItem[]) => {
  const todoListDataStr = JSON.stringify(todoListData);
  localStorage.setItem(TODO_LIST_DATA_LS_KEY, todoListDataStr);
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

interface FetchTodoItemPayload {
  id: string;
}

export const fetchTodoItem = async ({
  id,
}: FetchTodoItemPayload): Promise<TodoItem> => {
  await bootstrap();
  const todoList = getTodoListData();
  const todoItem: TodoItem | undefined = todoList.find(
    (todoListItem) => todoListItem.id === id,
  );

  if (!todoItem) {
    return Promise.reject('404 notFound!');
  }

  return todoItem;
};

interface PatchTodoItemPayload {
  todoItem: TodoItem;
}

export const patchTodoItem = async ({
  todoItem,
}: PatchTodoItemPayload): Promise<void> => {
  await bootstrap();
  const todoList = getTodoListData();

  const idx = todoList.findIndex(
    (currentTodoItem) => currentTodoItem.id === todoItem.id,
  );
  if (idx === -1) {
    return Promise.reject('404 notFound!');
  }

  todoList[idx] = todoItem;

  saveTodoListData(todoList);

  return Promise.resolve();
};

interface AddTodoItemPayload {
  todoItemData: TodoItemData;
}

export const addTodoItem = async ({
  todoItemData,
}: AddTodoItemPayload): Promise<string> => {
  await bootstrap();
  const todoList = getTodoListData();
  const id: string = getUUID();
  const todoItem: TodoItem = { id, ...todoItemData };
  todoList.unshift(todoItem);
  saveTodoListData(todoList);
  return Promise.resolve(id);
};

interface DeleteTodoItemPayload {
  id: string;
}

export const deleteTodoItem = async ({
  id,
}: DeleteTodoItemPayload): Promise<void> => {
  await bootstrap();
  const todoList = getTodoListData();
  const newTodoList = todoList.filter(
    (currentTodoItem) => currentTodoItem.id !== id,
  );

  saveTodoListData(newTodoList);

  return Promise.resolve();
};
