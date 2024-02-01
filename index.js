const containerDiv = document.getElementById("flex-grid");
const updateButton = document.getElementById("update-button");
const maxGridSize = 500;

function createGrid(size=16){
    for (let i=0; i < size; i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("id", "flex-row");
        let squareSize = Math.round(maxGridSize / (size));
        containerDiv.appendChild(divRow);
        for (let i=0; i < size; i++){
            let div = document.createElement("div");
            div.setAttribute("class", "square-div");
            div.setAttribute('style', `height: ${squareSize}px; width:${squareSize}px;`);
            div.addEventListener("mouseover", ()=>{
                div.classList.add("square-mouseover");
            }
            );
            div.addEventListener("mouseout", ()=>{
                div.classList.remove("square-mouseover");
                }
                );
            divRow.appendChild(div);
        }   
    }
}
createGrid();
updateButton.addEventListener("click", ()=>{
    containerDiv.replaceChildren("");
    let gridSize = document.getElementById('grid-size').value;
    createGrid(gridSize);
})