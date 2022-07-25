const inputField = document.getElementById('commandline');
const terminal = document.getElementById('input-terminal');

window.addEventListener('load', function() {
    inputField.focus();
})

window.addEventListener('keypress', function() {
    inputField.focus();
})

window.addEventListener('click', function() {
    inputField.focus();
})

function enterKeyPressed(event) {

    if (inputField.value === ""){
        return false
    }
    else{
        if (event.keyCode == 13) {
            console.log("Enter key is pressed");
            addLine(inputField.value);
            commande(inputField.value);
            inputField.value = "";
         }
    }

 }

function addLine(value){
    const para = document.createElement("p");
    para.innerText = "Aurele-Folio: ~ Aurele$" + " " + value;
    terminal.append(para);
}

function commande(value){
    if (value.toLocaleLowerCase().includes('home')){
        window.location.href='test.html'
    }
}