var cols, rows;
var w = 40;

var grid = [];

var current;

var stack = [];

function setup(){
    createCanvas(400,400);
    cols = floor(width/w);
    rows = floor(height/w);

    for(var j =0 ; j<rows ; j++){
        for(var i=0 ; i<cols; i++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    current = grid[0];
}

function draw(){
    background(51);

    for(var i =0 ; i<grid.length ; i++){
        grid[i].show();
    }
    for(let cell of stack){
        cell.showStack();
    }

    current.visited = true;
    current.highlight();
    var next = current.checkNeighbors();
    if(next){
        next.visited = true;

        stack.push(current);

        removeWall(current,next);

        current = next;
    }else if(stack.length > 0){
        var cell = stack.pop();
        current = cell;
    }

}

function Cell(i,j){
    this.i = i;
    this.j = j;
    this.walls = [true,true,true,true];
    this.visited = false;

    this.show = function(){
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if(this.walls[0]){
            line(x,y,x+w,y);//top
        }
        if(this.walls[1]){
            line(x+w,y,x+w,y+w);//right
        }
        if(this.walls[2]){
            line(x,y+w,x+w,y+w);//bottom
        }
        if(this.walls[3]){
            line(x,y,x,y+w);//left
        }

        if(this.visited){
            noStroke();
            fill(0,100,255);
            rect(x,y,w);
        }
    }

    this.highlight = function(){
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(0,255,0);
        rect(x,y,w);
    }

    this.showStack = function(){
        var x = this.i * w;
        var y = this.j * w;
        noStroke();
        fill(255,0,0);
        rect(x,y,w);
    }

    this.checkNeighbors = function(){
        var neighbors = [];

        var top = grid[index(this.i,this.j-1)];
        var right = grid[index(this.i+1,this.j)];
        var bottom = grid[index(this.i,this.j+1)];
        var left = grid[index(this.i-1,this.j)];

        var allDir = [top,right,bottom,left];

        for(let dir of allDir) {
            if (dir && !dir.visited) {
                neighbors.push(dir);
            }
        }

        if(neighbors.length > 0){
            var r = floor(random(0,neighbors.length));
            return neighbors[r];
        }else{
            return undefined;
        }

    }
}


function index(i,j){
    if(i<0 || j <0 || i > cols-1 || j > rows -1){
        return -1;
    }
    return i + (j*cols);
}


function removeWall(a,b){
    var x = a.i - b.i;
    if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
    }else if(x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    var y = a.j - b.j;
    if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
    }else if(y === -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }
}













