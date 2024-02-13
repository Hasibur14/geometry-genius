 function calculateParallelogramArea(){
 
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseText);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const parallelogramHeight = parseFloat(parallelogramHeightText);

    // calculation
    const parallelogramArea = 0.5 * parallelogramBase * parallelogramHeight;

    const parallelogramSpan = document.getElementById('parallelogram-area');
   parallelogramSpan.innerText =  parallelogramArea;
 }

 

