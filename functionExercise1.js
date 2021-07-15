function getAreaOfCircle (aRadius) {
    return (aRadius * aRadius * Math.PI);
}
function getCircumferenceOfCircle (cRadius) {
    return (cRadius * 2 * Math.PI);
}
function getAreaOfSquare (side) {
    return (side * side);
}
function getAreaOfTriangle (base, height) {
    return (base * height) / 2;
}

console.log("The area of the circle is: " + getAreaOfCircle(8));
console.log("The circumference of the circle is: " + getCircumferenceOfCircle(9));
console.log("The area of the square is: " + getAreaOfSquare(3));
console.log("The area of the triangle is: " + getAreaOfTriangle(7, 15));