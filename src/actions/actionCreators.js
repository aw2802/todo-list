//add a todo
var TodoId = 0;
export function addTodo(text){
	return{
		type: 'ADD_TODO',
		id: TodoId++,
		text
	}
}

//delete a todo
export function removeTodo(id){
	return{
		type: 'DELETE_TODO',
		id
	}
}

//change a todo to completed
export function toCompleted(index){
	return{
		type: 'COMPLETED',
		index
	}
}
