import {
  GetCategoriesAction,
  DeleteTaskAction,
  AddTaskAction,
  AuthenticationAction
} from '../actions';

export enum ActionTypes {
  getCategories,
  deleteTask,
  addTask,
  checkAuthentication
}

export type Action =
  | GetCategoriesAction
  | DeleteTaskAction
  | AddTaskAction
  | AuthenticationAction;
