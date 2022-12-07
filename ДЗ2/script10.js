let otvet = document.querySelector("input[type='button']");
otvet.addEventListener('click', answer);
function answer(){
    let f = document.forms.form1;
    for(i=0; i<f.r1.length; i++){
        if (f.r1[i].checked){
            alert("Правильный ответ: " + f.r1[i].value);
        }
    }
}





