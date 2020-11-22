class Ground {
    constructor() {
      this.body = Bodies.rectangle(675, 650, 1350,20, {isStatic:true});
      this.width = 1350;
      this.height = 20;

      World.add(world, this.body);
    }

    display() {
      rectMode(CENTER);
      stroke("black")
      fill("black");
      rect(this.body.position.x,this.body.position.y, this.width, this.height);
    }
};