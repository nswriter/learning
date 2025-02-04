const button = document.querySelector(".playerbut");

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
}





function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }