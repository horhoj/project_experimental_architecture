import { FC } from 'react';
import { Page404 } from '../features/Page404';
import { TodoItemPage } from '../features/todoList/TodoItemEditPage';
import { TodoListPage } from '../features/todoList/TodoListPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['todoList', 'todoItem', 'page404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  todoList: {
    path: '/todo-list',
    component: TodoListPage,
  },
  todoItem: {
    path: 'todo-item/:id',
    component: TodoItemPage,
  },
  page404: {
    path: '*',
    component: Page404,
  },
};
