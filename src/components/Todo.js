import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actionCreators';

let Todo =({text, i, removeTodo}) =>(
	<li className="todo-item">{text}<button onClick={() => removeTodo(i)}>&times;</button></li>
)

const mapDispatchToProps = dispatch => {
	return{
		removeTodo: i => dispatch(removeTodo(i))
	}
}

Todo = connect(null, mapDispatchToProps)(Todo);

export default Todo;