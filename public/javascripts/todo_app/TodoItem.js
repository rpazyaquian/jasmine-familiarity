var TodoItem = function(params) {
  this.text = params.text;
  this.completed = false;
}

TodoItem.prototype.toggleCompletion = function() {
  this.completed = !(this.completed);
  return this.completed;
}

TodoItem.prototype.status = function() {
  return this.text+": "+this.completed;
}