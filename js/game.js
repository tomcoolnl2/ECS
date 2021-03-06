/* =========================================================================
 *
 * game.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
ECS.Game = function Game() {
    // This is our "main" function which controls everything. We setup the
    // systems to loop over, setup entities, and setup and kick off the game
    // loop.
    var self = this;

    // Create some entities
    // ----------------------------------
    var entities = {}; // object containing { id: entity  }
    var entity;

    // Create a bunch of random entities
    for(var i = 0; i < 20; i += 1) {

        entity = new ECS.Entity();
        entity.addComponent( new ECS.component.Appearance() );
        entity.addComponent( new ECS.component.Position() );

        // % chance for decaying rects
        if(Math.random() < 0.8){
            entity.addComponent( new ECS.component.Health() );
        }

        // NOTE: If we wanted some rects to not have collision, we could set it
        // here. Could provide other gameplay mechanics perhaps?
        entity.addComponent( new ECS.component.Collision() );

        entities[entity.id] = entity;
    }

    // PLAYER entity
    // ----------------------------------
    // Make the last entity the "PC" entity - it must be player controlled,
    // have health and collision components
    entity = new ECS.Entity();
    entity.addComponent( new ECS.component.Appearance() );
    entity.addComponent( new ECS.component.Position() );
    entity.addComponent( new ECS.component.PlayerControlled() );
    entity.addComponent( new ECS.component.Health() );
    entity.addComponent( new ECS.component.Collision() );

    // we can also edit any component, as it's just data
    entity.components.appearance.colors.g = 255;
    entities[entity.id] = entity;

    // store reference to entities
    ECS.entities = entities;

    // Game loop
    // ----------------------------------
    function gameLoop() {

        // Simple game loop
        for( var system in ECS.system ){
            // Call the system and pass in entities
            // NOTE: One optimal solution would be to only pass in entities
            // that have the relevant components for the system, instead of
            // forcing the system to iterate over all entities
            ECS.system[system](ECS.entities);
        };

        // Run through the systems.
        // continue the loop
        if( self._running !== false ){
            requestAnimationFrame(gameLoop);
        };
    }
    // Kick off the game loop
    requestAnimationFrame(gameLoop);

    // Lose condition
    // ----------------------------------
    this._running = true; // is the game going?
    this.endGame = function endGame(){
        self._running = false;
        document.getElementById('final-score').innerHTML = ECS.score;
        document.getElementById('game-over').className = '';

        // set a small timeout to make sure we set the background
        window.setTimeout(function() {
            document.getElementById('game-canvas').className = 'game-over';
        }, 100);
    };


    return this;
};
