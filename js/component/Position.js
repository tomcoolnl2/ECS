
// Position
// --------------------------------------
ECS.component.Position = function ComponentPosition ( params ){
    params = params || {};

    // Generate random values if not passed in
    // NOTE: For the tutorial we're coupling the random values to the canvas'
    // width / height, but ideally this would be decoupled (the component should
    // not need to know the canvas's dimensions)
    this.x = params.x || 20 + (Math.random() * (ECS.$canvas.width - 20) | 0);
    this.y = params.y || 20 + (Math.random() * (ECS.$canvas.height - 20) | 0);

    return this;
};
ECS.component.Position.prototype.name = 'position';
