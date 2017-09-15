import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggle } from '../actions/actionCreators';

let Todo = ({text, i, removeTodo, toggle, completed}) =>( 
	<li className="todo-item"><button onClick={() => removeTodo(i)}>&times;</button>
	<span onClick={
		() => toggle(i, completed)} 
		style={{textDecoration: completed ? 'line-through': 'none'
	}}>{text}</span>
	</li>
)


const mapDispatchToProps = dispatch => {
	return{
		removeTodo: i => dispatch(removeTodo(i)),
		toggle: (i, completed) => dispatch(toggle(i, completed))
	}
}

Todo = connect(null, mapDispatchToProps)(Todo);

export default Todo;
