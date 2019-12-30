import React from 'react';
import { ReduxStoreState } from '../reducers/';
import { connect } from 'react-redux';
import { Task, Category, getCategories, deleteTask, addTask } from '../actions';
import { AddTaskForm } from '../components/AddTaskForm';
import { TasksContainer, TaskTitle, CategoryTitle } from './styles/tasks';
import { Container, FullWidthH2, Button } from './styles/base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface TasksProps {
  categories: Category[];
  getCategories: Function;
  deleteTask: typeof deleteTask;
  addTask: typeof addTask;
}

export class Tasks extends React.Component<TasksProps> {
  constructor(props: TasksProps) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getCategories();
  }

  onDelete(id: string) {
    this.props.deleteTask(id);
  }

  onSubmit(newTask: Task) {
    this.props.addTask(newTask);
  }

  renderCategories() {
    return (
      this.props.categories &&
      this.props.categories.map((category: Category, index: number) => {
        return (
          <TasksContainer className='col-md-6' key={index}>
            <CategoryTitle>{category.name}</CategoryTitle>

            {category.tasks.map((task: Task) => {
              return (
                <div className='mb-3' key={task.id}>
                  <TaskTitle className='pr-4'>{task.title}</TaskTitle>
                  <Button
                    className='task_remove btn btn-sm btn-danger'
                    onClick={() => this.onDelete(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              );
            })}
          </TasksContainer>
        );
      })
    );
  }
  render() {
    return (
      <div>
        <AddTaskForm
          onSubmit={this.onSubmit}
          categories={this.props.categories}
        />
        <Container className='row mt-5'>
          <FullWidthH2>Tasks Categories</FullWidthH2>
          {this.props.categories.length > 0 ? (
            this.renderCategories()
          ) : (
            <p className='no_data'>No data</p>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStoreState) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { getCategories, addTask, deleteTask })(
  Tasks
);
