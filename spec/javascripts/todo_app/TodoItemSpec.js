describe("TodoItem", function() {

  it("is not complete when created", function() {
    var todoItem = new TodoItem('pet jet');
    expect(todoItem.complete).toBeFalsy();
  });
});