// let a = document.querySelectorAll('.remove-button');
// let h = document.querySelectorAll('.pane');
//     for (let i = 0; i < h.length; i++){
//         a[i].addEventListener('click', cl);
//         function cl(c){
//             h[i].remove();
//         }
//     }


let spans = document.querySelectorAll('.remove-button');

for (let i =0; i < spans.length; i++){
    spans[i].addEventListener("click", function(){
        spans[i].parentNode.remove();
    })
}