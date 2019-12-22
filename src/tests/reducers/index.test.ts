import { categoriesReducer, authReducer } from '../../reducers';
import { ActionTypes } from '../../actions/actiontypes';
import { initialData } from '../fixture/testdata';
import {
  Auth,
  Category,
  AuthenticationAction,
  GetCategoriesAction,
  DeleteTaskAction,
  AddTaskAction
} from '../../actions';

test('should fetch all data and return the data from json file as initial state', () => {
  const initialState: Category[] = [];
  const action: GetCategoriesAction = {
    type: ActionTypes.getCategories,
    payload: initialData
  };
  const state = categoriesReducer(initialState, action);
  expect(state).toEqual(action.payload);
});

test('should fetch all data and return the preloaded state', () => {
  const preloadedState: Category[] = initialData;
  const action: GetCategoriesAction = {
    type: ActionTypes.getCategories,
    payload: [
      {
        name: 'Work',
        tasks: [
          {
            id: 'NDMALQSKSAL102mSAK-NGA',
            title: 'This payload will not be returned'
          }
        ]
      }
    ]
  };
  const state = categoriesReducer(preloadedState, action);
  expect(state).toEqual(preloadedState);
});

test('should dispatch a delete action and actually delete a task', () => {
  const initialState: Category[] = initialData;
  const action: DeleteTaskAction = {
    type: ActionTypes.deleteTask,
    payload: { id: initialData[0].tasks[0].id }
  };

  const state = categoriesReducer(initialState, action);
  expect(state).toEqual([{ ...initialData[0], tasks: [] }, initialData[1]]);
});

test('should dispatch an add action and add a task to the Sports Category', () => {
  const initialState: Category[] = initialData;
  const newTask = {
    id: expect.any(String),
    title: 'Play Volleyball',
    categoryTitle: 'Sports'
  };

  const { id, title } = newTask;
  const action: AddTaskAction = {
    type: ActionTypes.addTask,
    payload: newTask
  };

  const state = categoriesReducer(initialState, action);
  const expected = [
    { ...initialData[0], tasks: [...initialData[0].tasks, { id, title }] },
    initialData[1]
  ];
  expect(state).toEqual(expected);
});

test('should dispatch an add action and add a task to the Work Category', () => {
  const initialState: Category[] = initialData;
  const newTask = {
    id: expect.any(String),
    title: 'Attend the meeting',
    categoryTitle: 'Work'
  };

  const { id, title } = newTask;
  const action: AddTaskAction = {
    type: ActionTypes.addTask,
    payload: newTask
  };

  const state = categoriesReducer(initialState, action);
  const expected = [
    initialData[0],
    { ...initialData[1], tasks: [...initialData[1].tasks, { id, title }] }
  ];
  expect(state).toEqual(expected);
});

test('should not add any todo on error', () => {
  const initialState: Category[] = initialData;
  const newTask = {
    id: expect.any(String),
    title: 'Attend the meeting',
    categoryTitle: ''
  };

  const action: AddTaskAction = {
    type: ActionTypes.addTask,
    payload: newTask
  };

  const state = categoriesReducer(initialState, action);
  expect(state).toEqual(initialState);
});

test('should dispatch a login action', () => {
  const defState: Auth = { auth: false };
  const action: AuthenticationAction = {
    type: ActionTypes.checkAuthentication
  };
  const state = authReducer(defState, action);
  expect(state).toEqual({ auth: true });
});

test('should dispatch a logout action', () => {
  const defState: Auth = { auth: true };
  const action: AuthenticationAction = {
    type: ActionTypes.checkAuthentication
  };
  const state = authReducer(defState, action);
  expect(state).toEqual({ auth: false });
});
