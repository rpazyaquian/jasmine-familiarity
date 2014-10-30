var todoList = new TodoList;

var helloTodo = todoList.addItem({
  text: 'hello'
});

var worldTodo = todoList.addItem({
  text: 'world'
});

worldTodo.toggleCompletion();

todoList.render();