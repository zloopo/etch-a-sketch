const grid_container = document.querySelector('#grid-container');
const reset_button = document.querySelector('#reset-button');

function start(size){
    create_grid(size);
    reset_button.addEventListener('click', reset)
}


function create_grid(size){
    grid_size = grid_container.offsetHeight;
    square_size = grid_size/size;

    //Makes size^2 squares and gives them background-color, width and height properties.
    //Additionally, adds an event listener to each, that checks if the user hovers over it. 
    for(let i=0; i < size*size; i++){
        let square = document.createElement('DIV');
        square.style.height = `${square_size}px`;
        square.style.width = `${square_size}px`;
        square.style.margin = 0;
        square.style.backgroundColor = "white";

        square.addEventListener('mouseenter', () =>{
            square.style.backgroundColor = 'pink';
        });

        grid_container.appendChild(square);
    }


}

function destroy_grid(){
    let squares = grid_container.querySelectorAll("#grid-container > div");
    squares.forEach((square) => {
        grid_container.removeChild(square);
        square = null;

    });
}

function reset(){
    let size_input = prompt("How many squares per side do you want in this grid?")
    while (isNaN(size_input)){
        size_input = prompt("How many squares per side do you want in this grid?")
    }
    destroy_grid();
    start(size_input);
}


start(16);