var TodoList = function() {
  this.items = [];
}

TodoList.prototype.addItem = function(params) {
  var todoItem = new TodoItem(params);
  this.items.push(todoItem);
  return todoItem;
}

TodoList.prototype.list = function() {
  return this.items.map(function(item) {
    return item.status();
  });
}