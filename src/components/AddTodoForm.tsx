import React from 'react';
import { connect } from 'react-redux';
import { Todo, addTodo, Category } from '../actions';
import uuid from 'uuid';

interface AddTodoFormProps {
    categories: Category[];
    addTodo: typeof addTodo;
}

class AddTodoForm extends React.Component<AddTodoFormProps> {
    state: Todo = {
        id: 'default-id',
        title: '',
        categoryTitle: '',
        error: null
    };

    // handleInputChange = (e: any) => {
    //     const todoTitle = e.target.value;
    //     let id = uuid();

    //     this.setState(() => {
    //         return {
    //             title: todoTitle,
    //             id
    //         };
    //     });
    // };
    // handleSelectChange = (e: any) => {
    //     e.preventDefault();
    //     const todoCategoryTitle = e.target.value;
    //     this.setState(() => {
    //         return {
    //             categoryTitle: todoCategoryTitle
    //         };
    //     });
    // };

    onAddTodo = (e: any) => {
        e.preventDefault();
        let title = e.target.elements[0].value;
        console.log(title);
        let categoryTitle = e.target.elements[1].value;
        console.log(categoryTitle);
        let id = uuid();
        if (title && categoryTitle !== 'Select an option') {
            console.log('The if ran!');
            this.setState(
                () => {
                    return {
                        title,
                        categoryTitle,
                        id,
                        error: null
                    };
                },
                () => this.props.addTodo(this.state)
            );
            e.target.elements[0].value = '';
            e.target.elements[1].value = 'Select an option';
        } else if (
            !title ||
            !categoryTitle ||
            categoryTitle === 'Select an option'
        ) {
            console.log(' The else if ran!');
            this.setState(() => {
                return {
                    error:
                        'Please make sure you you have enetered todo title and selected a category'
                };
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && (
                    <p className='error'>{this.state.error}</p>
                )}
                <form onSubmit={this.onAddTodo}>
                    <label>Todo Title:</label>
                    <input type='text'></input>
                    <label>Todo Category:</label>
                    <select>
                        <option>Select an option</option>
                        {this.props.categories.map((category, i: number) => {
                            return <option key={i}>{category.name}</option>;
                        })}
                    </select>
                    <input type='submit' value='Add Todo' />
                </form>
            </div>
        );
    }
}

export default connect(undefined, { addTodo })(AddTodoForm);
