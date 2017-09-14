//add a todo
export function addTodo(text){
	return{
		type: 'ADD_TODO',
		text
	}
}

//delete a todo
export function removeTodo(index){
	console.log("removing");
	return{
		type: 'DELETE_TODO',
		index
	}
}

//change a todo to completed
export function toCompleted(index){
	console.log("completed");
	return{
		type: 'COMPLETED',
		index
	}
}
