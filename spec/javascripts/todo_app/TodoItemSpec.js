describe("TodoItem", function() {

  var todoItem = new TodoItem({ text: 'pet jet' });

  it("has todo text", function() {
    expect(todoItem.text).toEqual('pet jet');
  });

  it("is not complete when created", function() {
    expect(todoItem.completed).toBeFalsy();
  });

  it("toggles completion state", function() {
    expect(todoItem.toggleCompletion()).toBeTruthy();
  });

  it("renders its own status", function() {
    var expectedStatus = "pet jet: true";
    expect(todoItem.status()).toEqual(expectedStatus);
  });
});