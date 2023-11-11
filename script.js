const submit = document.getElementById("submit");
const rating = document.getElementById("rating-div");
const thank = document.getElementById("thank");
let selected = document.getElementById("selected");
let number;
const buttons = document.querySelectorAll(".rating__button");
console.log(buttons);

const click = () => {
    rating.classList.add("hidden");
    rating.classList.remove("show")
    thank.classList.remove("hidden")
    thank.classList.add("show");
   }
   
const fetch = (button) => {
   number = button.innerText;
   selected.innerText = number;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => fetch(button));
})
submit.addEventListener("click",click);
 

