window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () {
    
    Trellino.members = new Trellino.Collections.Members();
    Trellino.members.fetch();
    
    Trellino.boards = new Trellino.Collections.Boards();
    Trellino.boards.fetch();
    
    new Trellino.Routers.BoardRouter({ "$el": $('#content') });
    Backbone.history.start();
  }
};

$(document).ready(function() {
  Trellino.initialize();
});
