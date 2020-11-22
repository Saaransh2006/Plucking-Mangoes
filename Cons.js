class Cons{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }

    fly() {
        this.cons.bodyA = null;
    }

    reposition(body) {
        this.cons.bodyA = body;
    }

    display(){
        if(this.cons.bodyA) {
            var pointA = this.cons.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}