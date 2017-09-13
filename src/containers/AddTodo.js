import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actionCreators';

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
				<input type="text" ref="todo" placeholder="Input todo here" />
				<input type="submit" hidden />
			</form> 
		)
	}
});

AddTodo = connect()(AddTodo)

export default AddTodo;

