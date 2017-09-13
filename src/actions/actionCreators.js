//add a todo
var TodoId = 0;
export function addTodo(text){
	console.log("adding todo!");
	return{
		type: 'ADD_TODO',
		id: TodoId++,
		text
	}
}

//delete a todo
export function removeTodo(id){
	return{
		type: 'REMOVE_TODO',
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
