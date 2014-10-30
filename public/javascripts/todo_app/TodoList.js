var TodoList = function() {
  this.items = [];
  this.rootElement = 'ul';
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

TodoList.prototype.render = function() {
  var listElement = $('#todo-list');
  this.items.forEach(function(item){
    listElement.append(item.html());
  });
}