describe("TodoItem", function() {

  var todoItem = new TodoItem('pet jet');

  it("is not complete when created", function() {
    expect(todoItem.complete).toBeFalsy();
  });

  it("toggles completion state", function() {
    todoItem.toggleCompletion();
    expect(todoItem.complete).toBeTruthy();
  });

  it("renders its own status", function() {
    var expectedStatus = "pet jet: true";
    expect(todoItem.status()).toEqual(expectedStatus);
  });
});