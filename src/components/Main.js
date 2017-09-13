import React from 'react';
import TodoList from './TodoList';

const Main = React.createClass({
	render(){
		return(
			<div className="todoList">
				<TodoList />
			</div>
		)
	}
})

export default Main;