function calculateRectangleArea(){

    // rectangle Width :
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);

    // Rectangle Length
    const  rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);

    // calculation area:
    const rectangleArea = rectangleWidth * rectangleLength;

    // Display Rectangle Area
    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText =  rectangleArea;
}
