const javascriptExample = document.getElementById("javascriptExample");
const fontExample = document.getElementById("fontExample");
let toolListLeft = document.getElementsByClassName("left");
let toolListRight = document.getElementsByClassName("right");

javascriptExample.addEventListener("click", function(){
    const answer = prompt("This prompt was created using Javascript. Are you now satisfied we know Javascript? Y/n: ");
    if (answer.toLowerCase() == "n" || answer.toLocaleLowerCase() == "no") {
        let answerTwo = prompt("Sigh.  Fine.  What about now?  Y/n: ");
        if (answerTwo.toLowerCase() == "n" || answerTwo.toLocaleLowerCase() == "no") {
            let answerThree;
            do {
                answerThree = prompt("Look, I can do this all day long.  So, why don't you knock it off and just go ahead and say yes already, okay?  Y/n: ");
            } while (answerThree.toLowerCase() == "n" || answerThree.toLocaleLowerCase() == "no") alert("And I thank you for your support");
        } else {
            alert("About time. Thank you for your cooperation and vote of confidence. I'm wasn't sure I could've kept it up forever.");
        }
    } else {
        alert("Thanks for the vote of confidence.  You're a real trooper!");
    }
});

for (let i = 0; i < toolListLeft.length; i++){
    toolListLeft[i].addEventListener('mouseover',() => {
        toolListLeft[i].style.color = "#c2bba8";
        toolListLeft[i].style.fontWeight = "bold";

    })
    toolListLeft[i].addEventListener('mouseout',() => {
        toolListLeft[i].style.color = "#233237";
        toolListLeft[i].style.fontWeight = "normal";
    })
};
for (let i = 0; i < toolListRight.length; i++){
    toolListRight[i].addEventListener('mouseover',() => {
        toolListRight[i].style.color = "#c2bba8";
        toolListRight[i].style.fontWeight = "bold";
    })
    toolListRight[i].addEventListener('mouseout',() => {
        toolListRight[i].style.color = "#233237";
        toolListRight[i].style.fontWeight = "normal";
    })
};

let clickCount = 0;
fontExample.addEventListener("click", function(){
    clickCount++
    if (clickCount % 2 !== 0){
        fontExample.style.fontFamily = "Seale-font";
        fontExample.style.fontSize = "15px";
        fontExample.style.marginTop = "18px";
    } else {
        fontExample.style.fontFamily = "Oswald-Light";
        fontExample.style.fontSize = "28px";
        fontExample.style.marginTop = "0px";
    }
});


  
