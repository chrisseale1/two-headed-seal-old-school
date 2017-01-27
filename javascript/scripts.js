const javascriptExample = document.getElementById("javascriptExample");
let toolListLeft = document.getElementsByClassName("left");
let toolListRight = document.getElementsByClassName("right");

javascriptExample.addEventListener("click", function(){
    const answer = prompt("This prompt was created using Javascript. Are you now satisfied we know Javascript? Y/n: ");
    if (answer.toLowerCase() == "n") {
        let answerTwo = prompt("Sigh.  Fine.  What about now?  Y/n: ");
        if (answerTwo.toLowerCase() == "n") {
            let answerThree;
            do {
                answerThree = prompt("Look, I can do this all day long.  So, why don't you knock it off and just go ahead and say yes already, okay?  Y/n: ");
            } while (answerThree.toLowerCase() == "n") alert("And I thank you for your support");
        } else {
            alert("About time. Thank you for your cooperation and vote of confidence. I'm wasn't sure I could've kept it up forever.");
        }
    } else {
        alert("Thanks for the vote of confidence.  You're a real mensch!");
    }
});

for (let i = 0; i < toolListLeft.length; i++){
    toolListLeft[i].addEventListener('mouseover',() => {
        toolListLeft[i].style.color = "#EAC67A";
    })
    toolListLeft[i].addEventListener('mouseout',() => {
        toolListLeft[i].style.color = "#233237";
    })
};
for (let i = 0; i < toolListRight.length; i++){
    toolListRight[i].addEventListener('mouseover',() => {
        toolListRight[i].style.color = "#EAC67A";
    })
    toolListRight[i].addEventListener('mouseout',() => {
        toolListRight[i].style.color = "#233237";
    })
};