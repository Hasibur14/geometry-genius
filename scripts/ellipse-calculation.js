function calculateEllipseArea(){
    const ellipseAxisAInput = document.getElementById('a-axis');
    const ellipseAxisAText = ellipseAxisAInput.value;
    const axisA = parseFloat(ellipseAxisAText)

    const ellipseAxisBInput = document.getElementById('b-axis');
    const ellipseAxisBText = ellipseAxisBInput.value;
    const axisB = parseFloat(ellipseAxisBText);

    // calculation
    const ellipseArea = 0.5 *  axisA * axisB;

   const ellipseSpan  = document.getElementById('ellipse-area');
   ellipseSpan.innerText =  ellipseArea;

    
  }