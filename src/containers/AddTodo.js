import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreators';
import TodoList from '../components/TodoList';

let AddTodo = React.createClass({

	handleSubmit(e){
		e.preventDefault();
		const todo = this.refs.todo.value;
		this.props.dispatch(addTodo(todo));
		this.refs.todoForm.reset();
	},

	render(){
		return(
			<form ref="todoForm" className="todo-form" onSubmit={this.handleSubmit}>
				<input type="text" ref="todo" placeholder="input todo here" />
				<input type="submit" hidden />
			</form> 
		)
	}
});

AddTodo = connect()(AddTodo)

export default AddTodo;

