import React from 'react';
import { ReduxStoreState } from '../reducers/';
import { connect } from 'react-redux';
import { Task, Category, getCategories, deleteTask, addTask } from '../actions';
import { AddTaskForm } from '../components/AddTaskForm';

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
                    <div className='col-md-6' key={index}>
                        <h3>{category.name}</h3>

                        {category.tasks.map((task: Task) => {
                            return (
                                <div className='mb-3' key={task.id}>
                                    <span className='pr-4'>{task.title}</span>
                                    <button
                                        className='task_remove btn btn-sm btn-danger'
                                        onClick={() => this.onDelete(task.id)}
                                    >
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
                <AddTaskForm
                    onSubmit={this.onSubmit}
                    categories={this.props.categories}
                />
                <div className='row mt-5'>
                    <div className='col-12 mb-4'>
                        <h2>Tasks Categories</h2>
                    </div>
                    {this.props.categories.length > 0 ? (
                        this.renderCategories()
                    ) : (
                        <p className='no_data'>No data</p>
                    )}
                </div>
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
