//function for creating grid
const grid = document.getElementById("container")
let gridDim;

function gridMaker(num){
    // const gridStyle = grid.style;
    // gridStyle.gridTemplateColumns = "repeat(" + num + ", auto)";
    // gridStyle.gridTemplateRows = "repeat(" + num + ", auto)";
    for (let i = 0; i <= num*num; i++)
        {
        const row = document.createElement('div');
        row.classList.add('grid');
        grid.appendChild(row);
        }
    
    }
gridDim = prompt('Please Enter the new size of box :');
gridMaker(gridDim);

// const btn = document.getElementById("btn");
// btn.addEventListener("click",(e) =>
// {
//     gridDim = prompt('Please Enter the new size of box :');
//     if (gridDim>64){
//         alert('Maximum number is 64');
//         gridDim=64;
//     }
//     gridMaker(gridDim);
//     e.preventDefault();
// });
