import { combineReducers } from 'redux';
import { Category, Auth } from '../actions';
import { Action, ActionTypes } from '../actions/actiontypes';

export interface ReduxStoreState {
  categories: Category[];
  isAuthenticated: Auth;
}

export const categoriesReducer = (state: Category[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.getCategories:
      return state.length === 0 ? action.payload : state;
    case ActionTypes.deleteTask:
      return state.map(category => {
        return {
          ...category,
          tasks: category.tasks.filter(task => task.id !== action.payload.id)
        };
      });
    case ActionTypes.addTask:
      return state.map(category => {
        const { id, title } = action.payload;
        if (action.payload.categoryTitle === category.name) {
          return {
            ...category,
            tasks: [...category.tasks, { id, title }]
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

export const authReducer = (state: Auth = { auth: false }, action: Action) => {
  switch (action.type) {
    case ActionTypes.checkAuthentication:
      return state.auth ? { auth: false } : { auth: true };
    default:
      return state;
  }
};

export const reducers = combineReducers<ReduxStoreState>({
  categories: categoriesReducer,
  isAuthenticated: authReducer
});
