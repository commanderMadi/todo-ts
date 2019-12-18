import React from 'react';
import { connect } from 'react-redux';
import { Todo, addTodo, Category } from '../actions';

interface AddTodoFormProps {
    categories: Category[];
    addTodo: typeof addTodo;
}

class AddTodoForm extends React.Component<AddTodoFormProps> {
    state: Todo = {
        id: 0,
        title: '',
        categoryTitle: ''
    };

    handleInputChange = (e: any) => {
        const todoTitle = e.target.value;

        let id = Math.floor(Math.random() * 100);
        this.setState(() => {
            return {
                title: todoTitle,
                id
            };
        });
    };
    handleSelectChange = (e: any) => {
        e.preventDefault();
        const todoCategoryTitle = e.target.value;
        this.setState(() => {
            return {
                categoryTitle: todoCategoryTitle
            };
        });
    };

    onAddTodo = (e: any) => {
        console.log(this.state);
        e.preventDefault();
        this.props.addTodo(this.state);
    };
    render() {
        return (
            <form onSubmit={this.onAddTodo}>
                <label>Todo Title:</label>
                <input type='text' onChange={this.handleInputChange}></input>
                <label>Todo Category:</label>
                <select onChange={this.handleSelectChange}>
                    <option value='null'>Select an option</option>
                    {this.props.categories.map((category, i: number) => {
                        return <option key={i}>{category.name}</option>;
                    })}
                </select>
                <input type='submit' value='Add Todo' />
            </form>
        );
    }
}

export default connect(undefined, { addTodo })(AddTodoForm);
