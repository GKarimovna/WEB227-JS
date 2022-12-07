document.write("<table border = '1' align='center' width = '300' height = '300'>");
document.write("<tr align='center'>");
for (let j = 0; j < 11; j++) {
    document.write("<th>"+ j + "</th>");
}
document.write("</tr>");
for (let i = 1; i < 11; i++) {
    document.write("<tr align='center'>");
    document.write("<th>"+ i + "</th>");
    for (let j = 1; j < 11; j++) {
        if (j % 2 == 0 && i % 2 || j % 2 && i % 2 == 0) {
            document.write("<td bgcolor='yellow'>" + i * j + "</td>");
        }
        else {
            document.write("<td bgcolor='red'>" + i * j + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");


//document.write("<table border = '1' align='center' width = '300' height = '300'>");
//     document.write("<tr><td>"+ 0 + "</td>");
//     for(let i=1; i<=10; i++){
//         document.write("<td>"+ i + "</td>");
//     }
//     document.write("</tr>");
//     for(i=1; i<=10; i++){
//         document.write("<tr align='center'><td>"+ i + "</td>");
//         for (let j = 1; j < 11; j++) {
//             if (j % 2 == 0 && i % 2 || j % 2 && i % 2 == 0) {
//                 document.write("<td bgcolor='yellow'>" + i * j + "</td>");
//             }
//             else {
//                 document.write("<td bgcolor='red'>" + i * j + "</td>");
//             };
//         }
//         document.write("</tr>");
//     }

// document.write("</table>");