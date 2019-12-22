import React from 'react';
import { ReduxStoreState } from '../reducers/';
import { connect } from 'react-redux';
import { Task, Category, getCategories, deleteTask } from '../actions';
import AddTaskForm from '../components/AddTaskForm';

interface TasksProps {
  categories: Category[];
  getCategories: Function;
  deleteTask: typeof deleteTask;
}

class Tasks extends React.Component<TasksProps> {
  componentDidMount() {
    this.props.getCategories();
  }

  onBtnClick = (id: string) => {
    this.props.deleteTask(id);
  };

  renderCategories() {
    return (
      this.props.categories &&
      this.props.categories.map((category: Category, index: number) => {
        return (
          <div key={index}>
            <h2>{category.name}</h2>

            {category.tasks.map((task: Task) => {
              return (
                <div key={task.id}>
                  <h4>{task.title}</h4>
                  <button onClick={() => this.onBtnClick(task.id)}>
                    Remove Task
                  </button>
                </div>
              );
            })}
          </div>
        );
      })
    );
  }
  render() {
    return (
      <div>
        <h1>Tasks Component</h1>
        <AddTaskForm categories={this.props.categories} />
        {this.props.categories.length > 0 ? (
          this.renderCategories()
        ) : (
          <p>No data</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStoreState) => {
  return {
    categories: state.categories
  };
};
export default connect(mapStateToProps, { getCategories, deleteTask })(Tasks);
