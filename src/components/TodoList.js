import React from 'react';

const TodoList = React.createClass({

	handleSubmit(e){
		e.preventDefault();
		const todo = this.refs.todo.value;
		console.log(todo);
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

export default TodoList;