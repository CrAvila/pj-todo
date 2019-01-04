// V1 requirements 
    // It should have a place to store todos

    let toDos = ['Item 1', 'Item 2', 'Item 3'];

    // It should have a way to display todos

    console.log(toDos);

    // It should have a way to add new todos

    toDos.push('Item 4');
    toDos.push('Item 5');

    // It should have a way to change a todos

    toDos[0] = 'Changed!';

    // It should have a way to delete todo

    toDos.splice(0, 1);

// V2 requirements 
        //It should have a function to display toDos

        function displayTodos() {
            console.log(`My ToDos: ${toDos}`);
        };

        // It should have a function to add toDos

        function addTodos(newTodo){
            toDos.push(newTodo);
            displayTodos();
        };

        //It should have a function to change toDos

        function changeTodos(position, newValue){
            toDos[position] = newValue;
            displayTodos();
        };
        // It should have a function to delete toDos

        function deleteTodos(position){
            toDos.splice(position, 1);
            displayTodos();
        };

