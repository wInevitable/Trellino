Trellino.Views.BoardIndex = Backbone.View.extend({
  template: JST["board_index"],
  
  initialize: function() {
    this.collection = Trellino.boards;
  },
  
  render: function() {
    var renderedContent = this.template({
      boards: this.collection
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});