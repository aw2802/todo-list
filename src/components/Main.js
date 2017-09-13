import React from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from './TodoList';

const Main = React.createClass({
	render(){
		return(
			<div>
				<AddTodo />
				<TodoList {...this.props}/>
			</div>
		)
	}
})

export default Main;