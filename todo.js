let todos = [];
let choice = prompt("Choose an option : \n1. Add todo \n2. Update todo \n3. Delete todo \n4. Exit the app");
choice=parseInt(choice);
while(choice != 4){
    switch(choice){
        case 1:{
            let newTodo = prompt("Enter todo");
            todos.push(newTodo);
            console.log(todos);
            break;
        }
        case 2:{
            let updateTodo = prompt("Enter todo to update");
            let idx=todos.indexOf(updateTodo);
            if(idx==-1){
                console.log("No todo to update");
            }else{
                let newTodo=prompt("Enter updated todo");
                todos[idx]=newTodo;
            }
            break;
        }
        case 3:{
            let deleteTodo = prompt("Enter the todo to delete");
            let idx = todos.indexOf(deleteTodo);
            if(idx == -1){
                console.log("No todo to delete");
            }else{
                todos[idx]=null;
            }
            break;
        }
        case 4:{
            break;
        }
    }
    choice = prompt("Choose an option : \n1. Add todo \n2. Update todo \n3. Delete todo \n4. Exit the app");
    choice = parseInt(choice);
}