import React from 'react';
import Todo from './Todo';

const TodoList = React.createClass({
	render(){
		return(
			<div>
				<ul>{this.props.todos.map(todo => <Todo {...todo}/>)}</ul>
			</div>
		)
	}
});

export default TodoList;