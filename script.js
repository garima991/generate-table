let btn = document.getElementById("create-btn");
btn.addEventListener("click", createTable);

const createdTable = document.getElementById("createdTable");

function createTable(){
    const rows = document.getElementById("rows").value;
    const cols = document.getElementById("cols").value;

    const table = document.createElement("table");
    table.setAttribute("border", "2");
    table.setAttribute("width", "60%");
    

    for(let i = 0; i < rows; i++){
        const trow = document.createElement('tr');
        trow.style.border = "1px solid black";

        for(let j = 0; j < cols; j++){
            const tdata = document.createElement('td');
            //  tdata.textContent = "explorin";
            tdata.textContent = `Row${i} Col${j}`;
            tdata.style.padding= "10px";
            tdata.style.textAlign = "center";

            trow.appendChild(tdata);
        }
        table.appendChild(trow);
    }

    createdTable.appendChild(table);
    // console.log(table);
}



