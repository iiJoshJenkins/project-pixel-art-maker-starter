// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(width, height) {
    for(let i = 1; i <= width; i++){
        let row = document.createElement("tr");
        for(let y = 1; y <= height; y++){
            let column = document.createElement("td");
            row.appendChild(column);
        }
        pixelCanvas.appendChild(row);
    }

}

document.addEventListener("DOMContentLoaded", function(event){
    // Declaring all the DOM elements we need.
    const pixelCanvas = document.getElementById('pixelCanvas'),
          sizePicker = document.getElementById('sizePicker'),
          colorPicker = document.getElementById('colorPicker');


    sizePicker.addEventListener("submit", function(event){
        pixelCanvas.innerHTML = ""; // This needs to be done to remove the old grid if there was one.

        gridWidth = event.target["width"].value;
        gridHeight = event.target["height"].value;

        makeGrid(gridWidth, gridHeight);


        pixelCanvas.addEventListener("click", function(event){
            let drawColor = colorPicker.value;
            if(event.target.nodeName.toLowerCase() == "td"){
                event.target.style.backgroundColor = drawColor;
            }
        });

        event.preventDefault();
    });


});
