import React from 'react';
import { Task, Category } from '../actions';
import uuid from 'uuid';
import { FormContainer, Form } from './styles/forms';
import { Button } from '../components/styles/base';

interface AddTaskFormProps {
  categories: Category[];
  onSubmit(newTask: Task): void;
}

export class AddTaskForm extends React.Component<AddTaskFormProps> {
  constructor(props: AddTaskFormProps) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  state: Task = {
    id: 'default-id',
    title: '',
    categoryTitle: '',
    error: null
  };

  onSubmit(e: any) {
    e.preventDefault();
    let title = e.target.elements[0].value;
    let categoryTitle = e.target.elements[1].value;
    let id = uuid();
    if (title && categoryTitle !== 'Select an option') {
      this.setState(
        () => {
          return {
            title,
            categoryTitle,
            id,
            error: null
          };
        },
        () => this.props.onSubmit(this.state)
      );
      e.target.elements[0].value = '';
      e.target.elements[1].value = 'Select an option';
    } else if (
      !title ||
      !categoryTitle ||
      categoryTitle === 'Select an option'
    ) {
      this.setState(() => {
        return {
          error:
            'Please make sure you you have entered a Task title and selected a category'
        };
      });
    }
  }
  render() {
    return (
      <FormContainer>
        {this.state.error && (
          <p className='col-md-12 text-danger mt-4'>{this.state.error}</p>
        )}
        <h4 className='mt-2'>Add a New Task</h4>
        <Form className='mt-4' onSubmit={this.onSubmit}>
          <input
            className='form-control'
            id='task_title'
            placeholder='Enter task title...'
            type='text'
          />
          <select id='formcontrolselect' className='form-control'>
            <option>Select an option</option>
            {this.props.categories.map((category, i: number) => {
              return <option key={i}>{category.name}</option>;
            })}
          </select>
          <Button className='btn btn-primary' type='submit'>
            Add Task
          </Button>
        </Form>
      </FormContainer>
    );
  }
}
