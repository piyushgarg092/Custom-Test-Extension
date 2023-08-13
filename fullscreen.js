// Anonymous function to make the current window fullscreen

// let warnings=0;
function gofullscreenonclick(){
    addEventListener("click", function() {
        var
              el = document.documentElement
            , rfs =
                   el.requestFullScreen
                || el.webkitRequestFullScreen
                || el.mozRequestFullScreen
        ;
        rfs.call(el);
    });
};


// function oppenn(){
//     var myWindow = window.open("https://www.w3schools.com", "TestWindow");
//     myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
// }
// oppenn();

// function checkTabs(){
//     chrome.windows.getAll({populate: true}, function(allWindows)
// {
//     console.log(allWindows[0].tabs.length);
// });
// };
// checkTabs();



function fscreen() {
    var elem = document.documentElement;
    var rfs = 
           elem.requestFullscreen
        || elem.webkitRequestFullScreen
        || elem.mozRequestFullScreen
        || elem.msRequestFullScreen;
    rfs.call(elem);
};
// fscreen();




// Function to check if the current window is in full screen mode or not (Requires debugging)

// let warnings=0;
// function checker() {
//     if(window.fullScreen){
//         return;
//     }   
//     else{
//         warnings+=1;
//         if(warnings>3){
//             closeWindow();
//         }
//         (function gogo() {
//             var elem = document.documentElement;
//             var rfs = 
//                    elem.requestFullscreen
//                 || elem.webkitRequestFullScreen
//                 || elem.mozRequestFullScreen
//                 || elem.msRequestFullScreen;
//             rfs.call(elem);
//         })();
//     } 
// }
// inter = setInterval(checker, 1000);



// Escape button capturing event listener (Working perfectly, but requires twice Escape keypress)

// document.addEventListener("keyup", (event) =>{
//     if(event.key==='Escape'){
//         warnings+=1;
//         if(warnings>3){
//             closeWindow();
//         }
//         else{
//             alert(`You are left with ${3-warnings} chances`);
//             fscreen();           
//         }
//     }
// });



// Function to close the current window after exceeding warnings

function closeWindow() {
    window.open('','_parent','');
    window.close();
}



// listener of ctlr+tab

function KeyPress(e) {
    e.preventDefault();
    var evtobj = window.event? event : e
    if (evtobj.key == 'b' && evtobj.ctrlKey) alert("Ctrl+z");
}
document.onkeydown = KeyPress;



// Function to check if tab is active or not

var isTabActive;
let outOfFocus=0;
window.onfocus = function () { 
  isTabActive = true; 
}; 

window.onblur = function () { 
  isTabActive = false; 
    outOfFocus+=1;
    console.log(outOfFocus);    
    if(outOfFocus>4){
        closeWindow();
    }
}; 

// Intervals to check is current tab is active or not (if not then it'll alert) and also checking the no. of warnings till now, if it
// exceeds more than 3 then the window will be closed.


setInterval(function () { 
    if(!isTabActive){
        alert(`You're out of focus`);
        gofullscreenonclick();
    }    
}, 800);

