
// Health
// --------------------------------------
ECS.component.Health = function ComponentHealth ( value ){
    value = value || 20;
    this.value = value;

    return this;
};
ECS.component.Health.prototype.name = 'health';
