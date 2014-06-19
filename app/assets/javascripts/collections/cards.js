Trellino.Collections.Cards = Backbone.Collection.extend({
  initialize: function(options) {
    this.list = options.list
  },
  
  url: function() {
    return "api/lists/" + this.list.id + "/cards";
  },
  
  model: Trellino.Models.Card
});