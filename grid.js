function Grid(cols,rows,r){
    this.cols=cols;
    this.rows=rows;
    this.r=r;
    
    //document.getElementById('score').innerHTML = this.remainingMineCount;

    this.cells = new Array(this.cols);
    for (var i = 0; i < this.cols; i++) {
        this.cells[i] = new Array(this.rows);
    }
    
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.cells[i][j]=new Cell(i,j,this.r);
        }
    }
    
    this.fillSquare=function(x,y){ 
        this.cells[x][y].filled=true;
    } 
    
    this.show=function(){
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {   
                this.cells[i][j].show();
            }
        }
    }
    

}


function Cell(x,y,r){
    this.x=x;
    this.y=y;
    this.count=0;
    this.filled=false;
    this.r=r;
    this.visible=false;
    
    this.show=function(){
            if (this.filled){
                fill(0);
                stroke(0);
                rectMode(CENTER);
                rect(this.x*this.r+this.r/2,this.y*this.r+this.r/2,this.r,this.r);
            }else{
                fill(255);
                stroke(0);
                rectMode(CENTER);
                rect(this.x*this.r+this.r/2,this.y*this.r+this.r/2,this.r,this.r);
            }
    }
}
