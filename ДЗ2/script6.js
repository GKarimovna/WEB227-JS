let month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
for (i = 0; i < month.length; i++) {
    let res = month[i];
    document.write("<div>" + res + "<br>" + "</div>");
    let m = document.querySelectorAll('div')[i];
    m.style.textAlign = 'center';
    m.style.fontWeight = 'bold';
    m.style.background = 'rgb(' + createColor() + ', ' + createColor() + ', ' + createColor() + ')';

    function createColor() {
        return Math.floor(Math.random() * 256);
    }
}
