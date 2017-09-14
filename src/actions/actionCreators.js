//add a todo
export function addTodo(text){
	return{
		type: 'ADD_TODO',
		text
	}
}

//delete a todo
export function removeTodo(index){
	console.log("removing" +index);
	return{
		type: 'DELETE_TODO',
		index
	}
}

//change a todo to completed
export function toggle(index, completed){
	console.log("completed"+index);
	return{
		type: 'TOGGLE',
		index,
		completed
	}
}
