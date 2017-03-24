//variables
const javascriptExample = document.getElementById("javascriptExample");
const fontExample = document.getElementById("fontExample");
let toolListLeft = document.getElementsByClassName("left");
let toolListRight = document.getElementsByClassName("right");
const htmlExample = document.getElementById("htmlExample");
const adobeXD = document.getElementById("adobeXDExample");
const cssExample = document.getElementById("cssExample");
const angularExample = document.getElementById("angularExample");
const pythonExample = document.getElementById("pythonExample");
const sqlExample = document.getElementById("sqlExample");
const jqueryExample = document.getElementById("jqueryExample");
const bootsrapExample = document.getElementById("bootsrapExample");
const nodeExample = document.getElementById("nodeExample");
const photoshopExample = document.getElementById("photoshopExample");
const illustratorExample = document.getElementById("illustratorExample");
const phpExample = document.getElementById("phpExample");


//Javascript element
javascriptExample.addEventListener("click", function(){
    let answer = prompt("This prompt was created using Javascript. Are you now satisfied we know Javascript? Y/n: ");
    if(answer.toLowerCase() == "n" || answer.toLowerCase() == "no") {
        let answerTwo = prompt("Sigh.  Fine.  What about now?  Y/n: ");
        if (answerTwo.toLowerCase() == "n" || answerTwo.toLowerCase() == "no") {
            let answerThree;
            do {
                answerThree = prompt("Look, I can do this all day long.  So, why don't you knock it off and just go ahead and say yes already, okay?  Y/n: ");
            } while (answerThree.toLowerCase() == "n" || answerThree.toLowerCase() == "no") alert("And I thank you for your support");
        } else {
            alert("About time. Thank you for your cooperation and vote of confidence. I wasn't sure I could've kept it up forever.");
        }
    } else {
        alert("Thanks for the vote of confidence.  You're a real trooper!");
    }
});

//highlight gold on hover
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

//font construction element
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

//html pop up element
htmlExample.addEventListener("click", showSource);
bootstrapExample.addEventListener("click", showSource);
function showSource(){;
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); 
    if(window.focus) sourceWindow.focus();
}  

//lightbox modal image popup
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $jqueryExample = $("#jqueryExample");
var $pythonExample = $("#pythonExample");


$overlay.append($image);
$overlay.append($caption);
$("#tools-main-container").append($overlay);
$(".tool-list a").click(function(event){
    if (".tools-list li" !== $pythonExample){
        event.preventDefault();
        var imageLocation = $(this).attr("href");
        $image.attr("src", imageLocation);
        $overlay.show();
        var captionText = $(this).children("img").attr("alt");
        $caption.text(captionText);
    }
});

$overlay.click(function(){
    $overlay.hide();
});

//python link open in new window
let strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
let URL = "https://trinket.io/python/e84a12f777";


pythonExample.addEventListener('click', function(){
    return window.open(URL, "_blank", strWindowFeatures);
});