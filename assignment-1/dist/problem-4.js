"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        const rectangle = shape;
        return rectangle.width * rectangle.height;
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
