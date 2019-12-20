import {
    GetCategoriesAction,
    DeleteTodoAction,
    AddTodoAction,
    AuthenticationAction
} from '../actions';

export enum ActionTypes {
    getCategories,
    deleteTodo,
    addTodo,
    checkAuthentication
}

export type Action =
    | GetCategoriesAction
    | DeleteTodoAction
    | AddTodoAction
    | AuthenticationAction;
