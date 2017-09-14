import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actionCreators';

let Todo =({text, id, removeTodo}) =>(
	<li className="todo-item">{text}<button onClick={() => removeTodo(id)}>&times;</button></li>
)

const mapDispatchToProps = dispatch => {
	return{
		removeTodo: id => dispatch(removeTodo(id))
	}
}

Todo = connect(null, mapDispatchToProps)(Todo);

export default Todo;