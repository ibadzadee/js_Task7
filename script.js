let inpName = document.querySelector("#name")
let inpSurname = document.querySelector("#surname")
let inpAge = document.querySelector("#number")
let addBtn = document.querySelector("button")
let tBody = document.querySelector("tbody")

addBtn.addEventListener("click" , ()=>{
    let tr = document.createElement("tr")
    let tdName = document.createElement("td")
    tdName.innerText = inpName.value
    let tdSurname = document.createElement("td")
    tdSurname.innerText = inpSurname.value
    let tdAge = document.createElement("td")
    tdAge.innerText = inpAge.value
    if(tdName.textContent.trim() === "" || tdSurname.textContent.trim() === "" || tdAge.textContent.trim() === ""){
        alert("please, complete your inputs")
    }
    else{
        tr.append(tdName, tdSurname, tdAge);
        tBody.append(tr);
        inpName.value = ""
        inpSurname.value = ""
        inpAge.value = ""
        
    }
})