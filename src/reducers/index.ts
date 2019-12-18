import { combineReducers } from 'redux';
import { Category } from '../actions';
import { Action, ActionTypes } from '../actions/actiontypes';

export interface ReduxStoreState {
    categories: Category[];
}

const categoriesReducer = (state: Category[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.getCategories:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.map(category => {
                return {
                    ...category,
                    todos: category.todos.filter(
                        todo => todo.id !== action.payload.id
                    )
                };
            });
        case ActionTypes.addTodo:
            return state.map(category => {
                const { id, title } = action.payload;
                if (action.payload.categoryTitle === category.name) {
                    return {
                        ...category,
                        todos: category.todos.concat({ id, title })
                    };
                } else {
                    return {
                        ...category
                    };
                }
            });
        default:
            return state;
    }
};

export const reducers = combineReducers<ReduxStoreState>({
    categories: categoriesReducer
});
