  function calculatePentagonArea(){
    const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
    const pentagonPerimeterText = pentagonPerimeterInput.value;
    const perimeter = parseFloat(pentagonPerimeterText)

    const pentagonBaseInput = document.getElementById('pentagon-base');
    const pentagonBaseText = pentagonBaseInput.value;
    const base = parseFloat(pentagonBaseText);

    // calculation
    const pentagonArea = 0.5 *  perimeter * base;

   const pentagonSpan  = document.getElementById('pentagon-area');
   pentagonSpan.innerText =  pentagonArea;

    
  }