import React from 'react';
import { ReduxStoreState } from '../reducers/';
import { connect } from 'react-redux';
import { Task, Category, getCategories, deleteTask, addTask } from '../actions';
import { AddTaskForm } from '../components/AddTaskForm';
import {
  TasksContainer,
  TaskTitle,
  CategoryTitle,
  TaskContainer
} from './styles/tasks';
import { Container, FullWidthH2, IconButton } from './styles/base';
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
      this.props.categories.map((category: Category) => {
        return (
          <TasksContainer id={category.name} key={category.name}>
            <CategoryTitle>{category.name}</CategoryTitle>

            {category.tasks.map((task: Task) => {
              return (
                category && (
                  <TaskContainer key={task.id}>
                    <TaskTitle className='pr-4'>{task.title}</TaskTitle>
                    <IconButton
                      className='task_remove'
                      onClick={() => this.onDelete(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </IconButton>
                  </TaskContainer>
                )
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
        <Container>
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
