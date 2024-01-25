const containerDiv = document.getElementById("flex-grid");
for (let i=0; i < 16; i++){
    let div = document.createElement("div");
    div.setAttribute("id", "square-div");
    containerDiv.appendChild(div);
}