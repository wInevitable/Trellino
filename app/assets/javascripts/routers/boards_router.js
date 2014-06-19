Trellino.Routers.BoardRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.$el;
  },
  
  routes: {
    '': "index",
    'boards/new': "newBoard",
    'boards/:id': "showBoard",
    'boards/:id/list/new': "newList",
    'boards/:id/user/new': "newMember"
  },
  
  index: function() {
    var that = this;
    
    Trellino.boards.fetch({
      success: function () {
        var indexView = new Trellino.Views.BoardIndex();
        that._swapView(indexView);
      }
    })
  },
  
  newBoard: function() {
    var newBoardView = new Trellino.Views.NewBoard();
    this._swapView(newBoardView);
  },
  
  showBoard: function(id) {
    var that = this;
    
    Trellino.boards.getOrFetch(id, function(board) {
      var showView = new Trellino.Views.BoardShow({ board: board });
      that._swapView(showView);
    });
  },
  
  newList: function(id) {
    var that = this;
    
    var board = new Trellino.Models.Board({id: id})
    Trellino.boards.add(board)
    
    board.fetch({
      success: function () {

        var newListView = new Trellino.Views.NewList({
          board: board
        })
    
        that._swapView(newListView)
      }
    });
  },
  
  newMember: function(id) {
    var that = this;
    var board = new Trellino.Models.Board({id: id})
    Trellino.boards.add(board);
    
    board.fetch({
      success: function () {
        var newMemberView = new Trellino.Views.NewMember({
          board: board
        });
        
        that._swapView(newMemberView);
      }
    });
  },
  
  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});