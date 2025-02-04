const myImage = document.querySelector("img")
const myCaption =document.querySelector(".caption")

myImage.addEventListener("click", ()=>{
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "../Goof_Img/Ship1.png") {
        myImage.setAttribute("src", "../Goof_Img/Ship2.png")
        myCaption.textContent = `Ship2: A frigid arctic wasteland. In other words, the function worked! Click again to go back to the other image!`
    } else {
        myImage.setAttribute("src", "../Goof_Img/Ship1.png")
        myCaption.textContent = `Ship1: An arid landscape. Click the image to see some Javascript at work!`
    }
});



let myButton = document.querySelector("button");
let myHeading = document.querySelector(".Username");

function setUserName(){
    const myName =prompt("Please enter your name.", "");
    if (!myName){
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
})