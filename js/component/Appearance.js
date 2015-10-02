
ECS.component.Appearance = function ComponentAppearance ( params ){
    // Appearance specifies data for color and size
    params = params || {};

    this.colors = params.colors;
    if(!this.colors){
        // generate random color if not passed in (get 6 random hex values)
        this.colors = {
            r: 0,
            g: 100,
            b: 150
        };
    }

    this.size = params.size || (1 + (Math.random() * 30 | 0));

    return this;
};
ECS.component.Appearance.prototype.name = 'appearance';
