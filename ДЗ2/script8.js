// let a = document.querySelector('#cl');
// a.addEventListener("click", myMove);

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 50);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//             a.style.visibility = "visible";
//         }
//         else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//             a.style.visibility = "hidden";
//         }
//     }
// } 

let a = document.querySelector('#cl');
a.addEventListener("click", myMove);

function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 50);
    function frame() {
        if (pos == 350) {
            a.addEventListener("click", myMove);
            clearInterval(id);
        }
        else {
            a.removeEventListener("click", myMove);
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
} 