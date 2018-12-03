function triangletracker(){
var x = parseInt(prompt("Enter value x:"));
var y = parseInt(prompt("Enter value y:"));
var z = parseInt(prompt("Enter value z:"));

if(x==y && y==z){
alert("Your triangle is an Equilateral: All sides are equal");
}else if ((x==y && y!=z ) || (x!=y && z==x) || (z==y && z!=x)){
alert("Your triangle is an Isosceles: Exactly 2 sides are equal");
}else if(x!=y && y!=z && x!=z){
alert("Your triangle is a Scalene: No sides are equal");
}else if(x >= (y+z) || x >= (y+x) || y >= (x+z)){
alert("That is NOT a triangle");
}
}
triangletracker();
