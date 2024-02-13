function calculateTriangleArea(){
    // triangleBase
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
   const triangleBase = parseFloat(triangleBaseText);

//   triangleHeight 
const triangleHeightInput = document.getElementById("triangle-height");
const triangleHeightText = triangleHeightInput.value;
const triangleHeight = parseFloat(triangleHeightText);

// calculate triangle Area
const triangleArea = 0.5 * triangleBase * triangleHeight;

// display triangle Area
const  triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = triangleArea;
   
}