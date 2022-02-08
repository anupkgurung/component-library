const sidebar =document.querySelector(".sidebar");
const menuIcon =document.querySelector(".menu-icon-btn");
const modalBox = document.querySelector(".modal");
const openModal = document.querySelector("#openModal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".close");

menuIcon.addEventListener("click",function(){
    sidebar.classList.add("icon-btn-focus");
})

document.documentElement.addEventListener("click",function(e){
    if(!e.target.classList.contains("menu-icon-btn")){
        sidebar.classList.remove("icon-btn-focus");
        sidebar.classList.add("icon-btn-blur");
    }
})

openModal.addEventListener("click",function(){
    modalBox.style.display = "block";
    modalBackdrop.style.display = "block";
})
const hideModal = () => {
    modalBox.style.display = "none";
    modalBackdrop.style.display = "none";
}
modalContainer.addEventListener("click",hideModal);
closeModal.addEventListener("click",hideModal);