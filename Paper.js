class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          fricition: 0.5,
          density: 0.7
      }
      
      this.x = x;
      this.y = y;
      this.r = r;
      this.width = width;
      this.height = height;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      this.image = loadImage("paper.png");

      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image,0,0,80,80);
      pop();
    }
  }
  