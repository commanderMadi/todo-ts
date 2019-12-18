import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actiontypes';

const url = 'data.json';

export interface Category {
    name: string;
    todos: Todo[];
}

export interface Todo {
    id: string;
    title: string;
    categoryTitle?: string;
    error?: null;
}

export interface GetCategoriesAction {
    type: ActionTypes.getCategories;
    payload: Category[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: { id: string };
}

export interface AddTodoAction {
    type: ActionTypes.addTodo;
    payload: Todo;
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

export const deleteTodo = (id: string) => {
    return {
        type: ActionTypes.deleteTodo,
        payload: { id }
    };
};

export const addTodo = (newTodo: Todo): AddTodoAction => {
    return {
        type: ActionTypes.addTodo,
        payload: newTodo
    };
};
