import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toCompleted } from '../actions/actionCreators';

let Todo = ({text, i, removeTodo, toggle, completed}) =>( 
	<li className="todo-item" onClick={() => toggle(i)} style={{textDecoration: completed ? 'line-through': 'none'}}>{text}<button onClick={() => removeTodo(i)}>&times;</button></li>
)


const mapDispatchToProps = dispatch => {
	return{
		removeTodo: i => dispatch(removeTodo(i)),
		toggle: i => dispatch(toCompleted(i))
	}
}

Todo = connect(null, mapDispatchToProps)(Todo);

export default Todo;
