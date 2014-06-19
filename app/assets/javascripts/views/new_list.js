Trellino.Views.NewList = Backbone.View.extend({
  template: JST["new_list"],
  
  initialize: function(options) {
    this.board = options.board;
  },
  
  events: {
    "submit #new-list" : "submitList"
  },
  
  submitList: function (event) {
    event.preventDefault();
    var that = this;
    var formData = {
      title: this.$('#title').val(),
      rank: (this.board.lists().length + 1),
      board_id: this.board.id
    };

    this.board.lists().create(formData);
    Backbone.history.navigate("#/boards/" + this.board.id, { trigger: true })
  },
  
  render: function() {
    var renderedContent = this.template({
      board: this.board
    });
        
    this.$el.html(renderedContent);
    return this;
  }
});