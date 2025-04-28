
const titleChange = document.getElementById("title-change")
titleChange.addEventListener("click",() =>{
    const changedTitle = document.getElementById("title")
    if(changedTitle.textContent == "This is Anthony"){
        changedTitle.textContent = "This is DOM mainpulaton"
     }
     else{
        changedTitle.textContent = "This is Anthony"
     }
})


const list = document.getElementById("list");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");


addBtn.addEventListener("click" , () => {
    const  newItem = document.createElement("li");
    newItem.innerHTML = `<li>Hi</li>`;
    list.appendChild(newItem);
});

removeBtn.addEventListener("click" , () => {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});
button = document.getElementById("changeMe");
button.addEventListener("click", () =>{
    box = document.getElementById("color-change");

    if (box.style.background == "red"){
        box.style.background = "blue";
    }
    else{
        box.style.background = "red";
    }
}
);

