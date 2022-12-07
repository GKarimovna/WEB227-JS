document.write("<div id= 'd_one'></div>");
 let div1 = document.getElementById('d_one');
 d_one.innerHTML = "Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым отверстием), измеренным в миллиметрах..";

 div1.style.background = '#f0f';
 div1.style.color = '#99ffff';
div1.style.width = "50%";
 div1.style.outline = '10px dotted #000';

div1.className = 'resetFont';
let a = document.querySelector('.resetFont');
a.style.fontSize = '12px';
a.style.fontWeight = 'bold';
a.style.textDecoration = 'line-through';
console.log(a);




