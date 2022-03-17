document.addEventListener("DOMContentLoaded",
function(e){
    console.log(e)
});

function handleClickEvent(){
    let element = document.getElementsByClassName("top-header-container")

    console.log(element[0].style.backgroundImage=
        `linear-gradient(rgba(0,0,0,0.527),rgba(0,0,0,0.5)),
        url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')`);
}

function showModal(){
    let conatinerElement = document.getElementsByClassName("container");
    let modalContainer = document.createElement("div");
    let classButton = document.createElement("button");
    classButton.style.border = "unset";
    classButton.style.borderRadius = "50%";
    classButton.style.outline = "unset";
    classButton.innerText = "X";
    classButton.style.padding = "2% 3.5%";
    classButton.style.backgroundColor= "white";
    classButton.style.float = "right";
    classButton.style.fontWeight ="bold";

    classButton.addEventListener("click", function(e){
        modalContainer.style.display = "none";
    })

    modalContainer.appendChild(classButton);

    modalContainer.className = "show_modal";
    conatinerElement[0].appendChild(modalContainer)

}

function handleInputChange(event){
    console.log(event);
}