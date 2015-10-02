// For tutorial purposes, we'll set up a global object containing
// references to all objects.
ECS = (function( window, document ){

  var elements = {
    canvas : document.getElementById("game-canvas"),
    context : document.getElementById("game-canvas").getContext("2d"),
    score : document.getElementById("score")
  };

  return {

    elements : elements,

    assemblage: {},
    component: {},

    system: {},
    entities: [],

    game: {},

    score: 0,

    load : function() {
      // Kick off the game
      this.game = new ECS.Game();
    }
  }
}( this, this.document ));

this.addEventListener('load', ECS.load.bind(ECS));
