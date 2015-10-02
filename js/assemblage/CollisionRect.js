
ECS.assemblage.CollisionRect = function CollisionRect() {
    // Basic collision rect
    var entity = new ECS.Entity();
    entity.addComponent( new ECS.component.Appearance());
    entity.addComponent( new ECS.component.Position());
    entity.addComponent( new ECS.component.Collision());
    return entity;
}
