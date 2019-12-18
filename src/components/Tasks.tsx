import React from 'react';
import { ReduxStoreState } from '../reducers/';
import { connect } from 'react-redux';
import { Todo, Category, getCategories, deleteTodo } from '../actions';
import AddTodoForm from '../components/AddTodoForm';

interface TasksProps {
    categories: Category[];
    getCategories: Function;
    deleteTodo: typeof deleteTodo;
}

class Tasks extends React.Component<TasksProps> {
    componentDidMount() {
        this.props.getCategories();
    }

    onBtnClick = (id: number) => {
        this.props.deleteTodo(id);
    };

    renderCategories() {
        return (
            this.props.categories &&
            this.props.categories.map((category: Category, index: number) => {
                return (
                    <div key={index}>
                        <h2>{category.name}</h2>

                        {category.todos.map((todo: Todo) => {
                            return (
                                <div key={todo.id}>
                                    <h4>{todo.title}</h4>
                                    <button
                                        onClick={() => this.onBtnClick(todo.id)}
                                    >
                                        Remove Todo
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
                <AddTodoForm categories={this.props.categories} />
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
export default connect(mapStateToProps, { getCategories, deleteTodo })(Tasks);
