import React from 'react';
import { connect } from 'react-redux';
import { Task, addTask, Category } from '../actions';
import uuid from 'uuid';

interface AddTaskFormProps {
  categories: Category[];
  addTask: typeof addTask;
}

class AddTaskForm extends React.Component<AddTaskFormProps> {
  state: Task = {
    id: 'default-id',
    title: '',
    categoryTitle: '',
    error: null
  };

  onAddTask = (e: any) => {
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
        () => this.props.addTask(this.state)
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
            'Please make sure you you have enetered a Task title and selected a category'
        };
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <form onSubmit={this.onAddTask}>
          <label>Task Title:</label>
          <input type='text'></input>
          <label>Task Category:</label>
          <select>
            <option>Select an option</option>
            {this.props.categories.map((category, i: number) => {
              return <option key={i}>{category.name}</option>;
            })}
          </select>
          <input type='submit' value='Add Task' />
        </form>
      </div>
    );
  }
}

export default connect(undefined, { addTask })(AddTaskForm);
