function Joe(gridCol,gridRow,r){

    this.x=0;
    this.y=0;
    this.r=r;
    this.gridCol=gridCol;
    this.gridRow=gridRow;
    //this.img=loadImage("cinali2.png"); 
    this.location=createVector(this.x*this.r+this.r/2,this.y*this.r+this.r/2);
    this.target=createVector(this.x*this.r+this.r/2,this.y*this.r+this.r/2);
    this.speed=createVector(0,0);
    this.maxSpeed=1;
	this.animSpeed=0.2;
    this.rightHandAnimSpeed=0.2;
	this.length=this.r*1.4;
    
    this.moveRight=function(){
        if (this.x<this.gridCol-1){
            this.x+=1;
            this.setTarget(this.x,this.y);
        }
    }

    this.moveLeft=function(){
        if (this.x>0){
            this.x-=1;
            this.setTarget(this.x,this.y);
        }
    }

    this.moveDown=function(){
        if (this.y<this.gridRow-1){
            this.y+=1;    
            this.setTarget(this.x,this.y);
        }
    }

    this.moveUp=function(){
        if (this.y>0){
            this.y-=1;
            this.setTarget(this.x,this.y);
        }
    }

    this.show=function(){
          //imageMode(CENTER);
		var speed;
		var a1,a2,a3,a4;
		var tmpSpeed=this.speed.magSq();
		if (tmpSpeed<0.008){
			this.animSpeed=0.5;
		 	a1= sin(this.animSpeed);
			a3=sin(PI+this.animSpeed);
			a2=sin(this.animSpeed);
			a4=sin(PI+this.animSpeed);
			a5=sin(PI+this.rightHandAnimSpeed);
            this.rightHandAnimSpeed+=0.1;
		}else{
			if (this.speed.x>0){
				a1= sin(this.animSpeed);
				a3=sin(PI+this.animSpeed);
				a2=sin(this.animSpeed-0.4)-0.4;
				a4=sin(PI+this.animSpeed-0.4)-0.4;
                this.animSpeed+=0.1;

			}else{
				a1= sin(this.animSpeed);
				a3=sin(PI+this.animSpeed);
				a2=sin(this.animSpeed+0.4)+0.4;
				a4=sin(PI+this.animSpeed+0.4)+0.4;
                this.animSpeed-=0.1;
                
			}
            this.calculateDraw(a1,a2,a3,a4);

		}
		
        this.calculateDraw(a1,a2,a3,a4);
        
        


		  
		  
          //image(this.img, this.location.x, this.location.y,this.r*3/4,this.r*3/4);
    }
    this.calculateDraw=function(a1,a2,a3,a4){
		var headX,headY;
		headX=this.location.x;
		headY=this.location.y-this.length/4;
		var hipX=headX;
		var hipY=headY+this.length/4;

		var leftKneeX=hipX+sin(a1)*this.length/8;
		var leftKneeeY=hipY+cos(a1)*this.length/8;
		var rightKneeX=hipX+sin(a3)*this.length/8;
		var rightKneeY=hipY+cos(a3)*this.length/8;
		
		var leftAnkleX=leftKneeX+sin(a2)*this.length/8;
		var leftAnkleY=leftKneeeY+cos(a2)*this.length/8;
		var rightAnkleX=rightKneeX+sin(a4)*this.length/8;
		var rightAnkleY=rightKneeY+cos(a4)*this.length/8;
        var leftHandX=headX+sin(a1)*2*this.length/10;
        var leftHandY=headY+this.length/16+cos(a1)*2*this.length/10;
        var rightHandX=headX+sin(a3)*2*this.length/10;
        var rightHandY=headY+this.length/16+cos(a3)*2*this.length/10;
        var tmpSpeed=this.speed.magSq();

        if (tmpSpeed<0.01){
             rightHandY=headY+this.length/16+cos(a3)*2*this.length/20;
             var rightHandAnkleX=rightHandX+sin(a5)*this.length/30;
		     var rightHandAnkleY=rightHandY-cos(a5)*this.length/20;
             push();
             stroke(255,0,0);
             line (rightHandX,rightHandY,rightHandAnkleX,rightHandAnkleY);
             pop();
        }
	   
                
		push();
		stroke(255,0,0);
        fill(255);
		ellipse(headX,headY,this.length/8,this.length/8);
		ellipse(headX+this.length/32,headY-this.length/48,this.length/64,this.length/64);
		ellipse(headX-this.length/32,headY-this.length/48,this.length/64,this.length/64);
		line (headX-this.length/64,headY+this.length/64,headX+this.length/64,headY+this.length/64);
		line (headX,headY+this.length/16,hipX,hipY);
		line (headX,headY+this.length/8,leftHandX,leftHandY);
		line (headX,headY+this.length/8,rightHandX,rightHandY);
		line (hipX,hipY,leftKneeX,leftKneeeY);
		line (hipX,hipY,rightKneeX,rightKneeY);
		line (leftKneeX,leftKneeeY,leftAnkleX,leftAnkleY);
		line (rightKneeX,rightKneeY,rightAnkleX,rightAnkleY);
		pop();
    }
    
    
    this.setTarget=function(x,y){
        this.target.x=x*this.r+this.r/2
        this.target.y=y*this.r+this.r/2;
    }
    
    
    this.seek=function() {
        
        var desired = p5.Vector.sub(this.target,this.location);
        var d = desired.magSq();
        if (d < 100) {
            var m = map(d,0,100,0,this.maxSpeed);
            desired.limit(m);
        } else {
            desired.limit(this.maxSpeed);
        }
        var steer = p5.Vector.sub(desired,this.speed);
        steer.limit(2);
        this.applyForce(steer);
        
        
        
        
        
    }
    
    this.applyForce=function(force){
        this.speed.x+=force.x;
        this.speed.y+=force.y;
    }      
    
    this.update=function(dist){
        this.seek();
        this.location.add(this.speed);
        this.show();
    }

}
