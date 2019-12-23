import React from 'react';
import { Tasks } from '../../components/Tasks';
import { shallow, ShallowWrapper } from 'enzyme';
import { Task } from '../../actions';
import { ActionTypes } from '../../actions/actiontypes';
import { initialData } from '../fixture/testdata';

let newTask: Task;
beforeEach(() => {
  newTask = {
    id: 'default-id-of-dummy-data',
    title: 'Run for half an hour',
    categoryTitle: 'Sports',
    error: null
  };
});

test('Tasks component should load with all default data', () => {
  const wrapper: ShallowWrapper<Tasks> = shallow(
    <Tasks
      categories={initialData}
      getCategories={() => ({
        type: ActionTypes.getCategories
      })}
      deleteTask={id => ({
        type: ActionTypes.deleteTask,
        payload: { id }
      })}
      addTask={() => {
        return {
          type: ActionTypes.addTask,
          payload: newTask
        };
      }}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test('A task should be deleted when delete function is triggered', () => {
  const onDeleteSpy = jest.spyOn(Tasks.prototype, 'onDelete');
  const wrapper: ShallowWrapper<Tasks> = shallow(
    <Tasks
      categories={initialData}
      getCategories={() => ({
        type: ActionTypes.getCategories
      })}
      deleteTask={id => ({
        type: ActionTypes.deleteTask,
        payload: { id }
      })}
      addTask={() => {
        return {
          type: ActionTypes.addTask,
          payload: newTask
        };
      }}
    />
  );

  wrapper
    .find('button.task_remove')
    .at(1)
    .simulate('click');
  expect(onDeleteSpy).toHaveBeenLastCalledWith(initialData[1].tasks[0].id);
});

test('AddTaskForm should correctly adds a task to the Tasks page on submit', () => {
  const onSubmit = jest.spyOn(Tasks.prototype, 'onSubmit');
  const wrapper: ShallowWrapper<Tasks> = shallow(
    <Tasks
      categories={initialData}
      getCategories={() => ({
        type: ActionTypes.getCategories
      })}
      deleteTask={id => ({
        type: ActionTypes.deleteTask,
        payload: { id }
      })}
      addTask={() => {
        return {
          type: ActionTypes.addTask,
          payload: newTask
        };
      }}
    />
  );
  wrapper.find('AddTaskForm').prop('onSubmit')!(newTask as any);
  expect(onSubmit).toHaveBeenLastCalledWith(newTask);
});
