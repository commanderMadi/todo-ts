import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actiontypes';

const url = 'data.json';

export interface Category {
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  categoryTitle?: string;
  error?: null;
}

export interface Auth {
  auth: boolean;
}

export interface GetCategoriesAction {
  type: ActionTypes.getCategories;
  payload: Category[];
}

export interface DeleteTaskAction {
  type: ActionTypes.deleteTask;
  payload: { id: string };
}

export interface AddTaskAction {
  type: ActionTypes.addTask;
  payload: Task;
}

export interface AuthenticationAction {
  type: ActionTypes.checkAuthentication;
  payload?: Auth;
}

export const getCategories = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Category[]>(url);

    dispatch<GetCategoriesAction>({
      type: ActionTypes.getCategories,
      payload: response.data
    });
  };
};

export const deleteTask = (id: string) => {
  return {
    type: ActionTypes.deleteTask,
    payload: { id }
  };
};

export const addTask = (newTask: Task): AddTaskAction => {
  return {
    type: ActionTypes.addTask,
    payload: newTask
  };
};

export const checkAuthentication = (auth: Auth): AuthenticationAction => {
  return {
    type: ActionTypes.checkAuthentication,
    payload: auth
  };
};
