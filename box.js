class Box {
    constructor(x,y,width,height) {
      this.Visiblity = 5;
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var ps =this.body.position;
      rectMode(CENTER);      
      if(this.body.speed < 3){
        rect(ps.x, ps.y, this.width,this.height);
       }
       else{
        World.remove(world, this.body);
        this.Visiblity = this.Visiblity - 5;
        
      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score++
      }
    }
   
  };
