function User(name, age, job){
    this.name = name,
    this.age = age,
    this.job = job,
    this.who = function(){
        document.write("Я " + this.name + " мне " + this.age + " лет. Я работаю " + this.job + "." + "<br>");
    }
}

let dm = new User("Дмитрий", 26, "Дизайнером");
dm.who();

let st = new User("Станислав", 29, "Программистом");
st.who();

let se = new User("Сергей", 35, "Менеджером");
se.who();
