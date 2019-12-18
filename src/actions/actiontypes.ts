import {
    GetCategoriesAction,
    DeleteTodoAction,
    AddTodoAction
} from '../actions';

export enum ActionTypes {
    getCategories,
    deleteTodo,
    addTodo
}

export type Action = GetCategoriesAction | DeleteTodoAction | AddTodoAction;
