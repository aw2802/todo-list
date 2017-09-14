import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';

const Main = React.createClass({
	render(){
		return(
			<div className="todo-list-container">
				<h1 className="title">To Do List</h1>
				<AddTodo />
				<TodoList {...this.props}/>
			</div>
		)
	}
})

export default Main;