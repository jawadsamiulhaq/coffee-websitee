function myFunction() {
    debugger;
        let element = document.getElementById("toggle")
        element.classList.toggle("dark-mode");
        let price_card = document.getElementsByClassName("price-card")[0];
        price_card.classList.toggle("price-card-dark-mode")
        //border dark mode white color
        let dark_all = document.getElementsByClassName("dark-all-border");
        for (let i of dark_all){
            i.classList.toggle("dark-all")
        }
        let logo = document.getElementsByClassName("logo-dark-mode");
        for(let k of logo){
            k.classList.toggle("logo-dark")
        }
        let button = document.getElementsByClassName("button-all");
        for(let j of button){
            j.classList.toggle("button-mode");
        }
        //slush card border
        let slush_border = document.getElementsByClassName("slush-card")
        for (let i of slush_border){
            i.classList.toggle("dark-all")
        }
}
let title = document.title;
window.addEventListener("blur",()=>{
    document.title = "Come Back :(🥺";
})
window.addEventListener("focus",()=>{
    document.title = title;
})