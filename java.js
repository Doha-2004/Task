function check(){
    let numberbasic=document.getElementById('Number 1').value;
    let range =document.getElementById('Number 2').value;
    let count =0;
    let tb=document.createElement("table");
    for(let i=1;i<=range;i++){
        
    let tblBody = document.createElement("tbody");
    let row = tblBody.insertRow(0); 
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.textContent=numberbasic;
    cell2.textContent="*";
    cell3.innerHTML=count;
    cell4.innerHTML="="
    cell5.innerHTML=numberbasic*count;
    tb.appendChild(tblBody);
        count++;
    }
    // let tb=document.createElement("table");
    // let tblBody = document.createElement("tbody");
    // let row = tblBody.insertRow(0); 
    // let cell1 = row.insertCell(0);
    // let cell2 = row.insertCell(1);
    // let cell3 = row.insertCell(2);
    // let cell4 = row.insertCell(3);
    // let cell5 = row.insertCell(4);
    // cell1.textContent=numberbasic;
    // cell2.textContent="*";
    // cell3.innerHTML=count;
    // cell4.innerHTML="="
    // cell5.innerHTML=numberbasic*count;
    //tb.appendChild(tblBody);
    document.getElementById("result").appendChild(tb);

}
