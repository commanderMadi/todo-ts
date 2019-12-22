import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { getCategories, addTask, deleteTask } from '../../actions/';
import { ActionTypes, Action } from '../../actions/actiontypes';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { initialData } from '../fixture/testdata';

type DispatchExts = ThunkDispatch<undefined, undefined, Action>;

const mockStore = configureStore<{}, DispatchExts>([thunk]);
const mockedAxios = new MockAdapter(axios);

describe('Test generating the async action/actions', () => {
  const store = mockStore({});
  beforeEach(() => store.clearActions());

  test('should generate getCategories action object', () => {
    mockedAxios.onGet('data.json').reply(200, {
      data: [
        {
          name: 'Sports',
          tasks: [
            {
              id: '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
              title: 'Play Football'
            },
            {
              id: '9125a8dc-52ee-365b-a5aa-81b0b3681cf6',
              title: 'Play Basketball'
            }
          ]
        },
        {
          name: 'Work',
          tasks: [
            {
              id: 'c6235813-3ba4-3801-ae84-e0a6ebb7d138',
              title: 'Study TS'
            },
            {
              id: 'e8b5a51d-11c8-3310-a6ab-367563f20686',
              title: 'Work Hard'
            }
          ]
        }
      ]
    });

    store.dispatch(getCategories()).then(() => {
      const actions = store.getActions();
      const expectedAction = {
        type: ActionTypes.getCategories,
        payload: {
          data: [
            {
              name: 'Sports',
              tasks: [
                {
                  id: '2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d',
                  title: 'Play Football'
                },
                {
                  id: '9125a8dc-52ee-365b-a5aa-81b0b3681cf6',
                  title: 'Play Basketball'
                }
              ]
            },
            {
              name: 'Work',
              tasks: [
                {
                  id: 'c6235813-3ba4-3801-ae84-e0a6ebb7d138',
                  title: 'Study TS'
                },
                {
                  id: 'e8b5a51d-11c8-3310-a6ab-367563f20686',
                  title: 'Work Hard'
                }
              ]
            }
          ]
        }
      };
      expect(actions[0]).toEqual(expectedAction);
    });
  });
});

describe('Test generating all the sync action objects', () => {
  test('should generate add task action object', () => {
    const newTask = {
      id: 'some-random-id-for',
      title: 'Play Squash',
      categoryTitle: 'Sports'
    };
    const action = addTask(newTask);
    expect(action).toEqual({
      type: ActionTypes.addTask,
      payload: newTask
    });
  });
  test('should dispatch a delete task action', () => {
    const { tasks } = initialData[0];
    const { id } = tasks[0];
    const action = deleteTask(id);
    expect(action).toEqual({ type: ActionTypes.deleteTask, payload: { id } });
  });
});
