import React from 'react';

const Todo =({text}) =>(
	<li className="todo-item">{text}<button>X</button></li>
)

export default Todo;