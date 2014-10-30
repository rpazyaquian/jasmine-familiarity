describe("TodoList", function() {

  // does this mean BDD should be describing
  // functions/methods instead of attributes/properties?

  var todoList = new TodoList;

  todoList.addItem({
    text: 'hello'
  });

  todoList.addItem({
    text: 'world'
  });

  it ("has many TodoItems", function() {
    expect(todoList.items.length).toEqual(2);
  });

  it ("lists all its TodoItems", function() {
    var listItems = ['hello: false', 'world: false'];
    expect(todoList.list()).toEqual(listItems);
  });

  it ("adds a new TodoItem to the list", function() {
    var newTodo = todoList.addItem({
      text: 'take out trash'
    });
    expect(todoList.list()).toContain(newTodo.status());
  });

});