Trellino.Views.BoardShow = Backbone.View.extend({
  template: JST["board_show"],
  
  events: {
    "submit #add-card": "addCard"
  },
  
  initialize: function(options) {
    this.board = options.board
  },
  
  addCard: function(event) {
    event.preventDefault();
    
    var formData = {
      title: $(event.currentTarget).attr('#title').val(),
      rank: 1,
      list_id: $(event.currentTarget).attr('data-id')
    };

    this.board.lists().create(formData);
    debugger
    Backbone.history.navigate("#/boards/" + this.board.id, { trigger: true })
  },
  
  render: function() {
    var renderedContent = this.template({
      board: this.board
    })
    this.$el.html(renderedContent);
    return this;
  }
});