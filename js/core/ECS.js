// For tutorial purposes, we'll set up a global object containing
// references to all objects.
ECS = (function(window){

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

    score: 0
  }
}(this));
