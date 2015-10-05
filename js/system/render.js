/* =========================================================================
 *
 * render.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
function clearCanvas () {
    // Store the current transformation matrix
    ECS.elements.context.save();

    // Use the identity matrix while clearing the canvas
    ECS.elements.context.setTransform(1, 0, 0, 1, 0, 0);
    ECS.elements.context.clearRect(0, 0, ECS.elements.canvas.width, ECS.elements.canvas.height);

    // Restore the transform
    ECS.elements.context.restore();
}


// ECS - System - Render
// --------------------------------------
ECS.system.Render = function systemRender ( entities ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    // This happens each tick, so we need to clear out the previous rendered
    // state
    clearCanvas();

    var curEntity, fillStyle;

    // iterate over all entities
    for( var entityId in entities ){
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        //
        // For rendering, we need appearance and position. Your own render
        // system would use whatever other components specific for your game
        if( curEntity.components.appearance && curEntity.components.position ){

            // Build up the fill style based on the entity's color data
            fillStyle = 'rgba(' + [
                curEntity.components.appearance.colors.r,
                curEntity.components.appearance.colors.g,
                curEntity.components.appearance.colors.b
            ];

            if(!curEntity.components.collision){
                // If the entity does not have a collision component, give it
                // some transparency
                fillStyle += ',0.1)';
            } else {
                // Has a collision component
                fillStyle += ',1)';
            }

            ECS.elements.context.fillStyle = fillStyle;

            // Color big squares differently
            if(!curEntity.components.playerControlled &&
            curEntity.components.appearance.size > 12){
                ECS.elements.context.fillStyle = 'rgba(0,0,0,0.8)';
            }

            // draw a little black line around every rect
            ECS.elements.context.strokeStyle = 'rgba(0,0,0,1)';

            // draw the rect
            ECS.elements.context.fillRect(
                curEntity.components.position.x - curEntity.components.appearance.size,
                curEntity.components.position.y - curEntity.components.appearance.size,
                curEntity.components.appearance.size * 2,
                curEntity.components.appearance.size * 2
            );
            // stroke it
            ECS.elements.context.strokeRect(
                curEntity.components.position.x - curEntity.components.appearance.size,
                curEntity.components.position.y - curEntity.components.appearance.size,
                curEntity.components.appearance.size * 2,
                curEntity.components.appearance.size * 2
            );
        }
    }
};
