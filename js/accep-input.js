let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("head").textContent = `Hello! ${username}`;
}
