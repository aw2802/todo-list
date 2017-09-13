import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actionCreators';

let Todo =({text, id}) =>(
	<li className="todo-item">{text}{id}<button>&times;</button></li>
)

Todo = connect()(Todo);

export default Todo;