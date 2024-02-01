const containerDiv = document.getElementById("flex-grid");

for (let i=0; i < 16; i++){
    let divRow = document.createElement("div");
    divRow.setAttribute("id", "flex-row");
    containerDiv.appendChild(divRow);
    for (let i=0; i < 16; i++){
        let div = document.createElement("div");
        div.setAttribute("class", "square-div");
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
