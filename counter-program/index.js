const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const increaseButton = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLable");
let count = 0;

increaseButton.onclick = function (){
    count++;
    countLable.textContent = count
}
decreaseButton.onclick = function (){
    count--;
    countLable.textContent = count
}
resetButton.onclick = function (){
    count = 0;
    countLable.textContent = count
}
