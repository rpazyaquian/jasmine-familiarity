var TodoItem = function(params) {
  this.text = params.text;
  this.completed = false;
  this.rootElement = 'li';
}

TodoItem.prototype.toggleCompletion = function() {
  this.completed = !(this.completed);
  return this.completed;
}

TodoItem.prototype.status = function() {
  return this.text+": "+this.completed;
}

TodoItem.prototype.html = function() {
  var itemElement = $('<li>').text(this.status());
  return itemElement;
}