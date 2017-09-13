import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';

const Main = React.createClass({
	render(){
		return(
			<div className="todo-list-container">
				<AddTodo />
				<TodoList {...this.props}/>
			</div>
		)
	}
})

export default Main;