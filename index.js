var rect = require("./rectangle");

function solveRect(l,b){

    if(l >= 0 && b>= 0){
        console.log("area of rect"+rect.area(l,b));
        console.log("area of perimeter"+rect.perimeter(l,b));
        
    }
}

solveRect(3,5);
solveRect(0,8);