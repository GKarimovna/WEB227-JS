function Automobile(color, model, year, manufact){
    this.color = color,
    this.model = model,
    this.year = year,
    this.manufact = manufact,
    this.whatColor = function(){
        document.write("Цвет машины: " + this.color + " ");
    },
    this.autoInfo = function(){
        document.write("Модель машины: " + this.model + "<br>" + "Год выпуска: " + this.year + "<br>" + "Производитель автомобиля: " + this.manufact + "<br>" + "<br>")
    }
}

let nissan = new Automobile("Красный","Nissan Skyline", 2007, "Nissan");
nissan.whatColor();
nissan.autoInfo();

let toyota = new Automobile("Черный","Toyota Corolla", 2009, "Toyota");
toyota.whatColor();
toyota.autoInfo();

let vw = new Automobile("Синий","Volkswagen Golf", 2009, "Volkswagen");
vw.whatColor();
vw.autoInfo();