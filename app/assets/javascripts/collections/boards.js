Trellino.Collections.Boards = Backbone.Collection.extend({
  model: Trellino.Models.Board,
  
  url: "/api/boards",
  
  getOrFetch: function(id, callback) {
    var board = this.get(id);
    if (board) {
      board.fetch({
        success: function () {
          callback(board);
        }
      });
    } else {
      board = new Trellino.Models.Board({ id: id });
      board.collection = Trellino.boards;
      board.fetch({
        success: function() {
          Trellino.boards.add(board);
          callback(board);
        }
      })
    }
  }
});