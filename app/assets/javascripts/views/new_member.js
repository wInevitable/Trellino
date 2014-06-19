Trellino.Views.NewMember = Backbone.View.extend({
  template: JST["new_member"],
  
  initialize: function (options) {
    this.board = options.board
  },
  
  events: {
    "submit #new-user": "submitMember"
  },
  
  submitMember: function(event) {
    event.preventDefault();
    
    var that = this;
    var formData = this.$('#email').val();

    var member = Trellino.members.findWhere({ email: formData })
    member.save({}, {
      success: function() {
        that.board.add(member);
        Backbone.history.navigate("#/boards/" + this.board.id, { trigger: true });
      }
    });
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});