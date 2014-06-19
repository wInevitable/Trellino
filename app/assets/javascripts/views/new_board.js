Trellino.Views.NewBoard = Backbone.View.extend({
  template: JST["new_board"],
  
  events: {
    "submit #new-board": "postBoard"
  },
  
  postBoard: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $(event.target).serializeJSON();
  
    this.model = new Trellino.Models.Board();
    this.model.set(formData);
    this.model.collection = Trellino.boards; 

    this.model.save({wait: true}, {
      success: function() {
        that.model.fetch();
        Backbone.history.navigate("#/boards/" + that.model.id, { trigger: true })
      }
    });

  },
  
  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});