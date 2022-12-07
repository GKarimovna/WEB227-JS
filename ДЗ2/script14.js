class Header {
    constructor(img, p) {
        this.src = img;
        this.p = p;
    }

    render(id) {
        let out = `
    <img src = "${this.src}" alt="">
    <p>${this.p}</p>
    `;
    document.querySelector(`#${id}`).innerHTML = out;
    }
}

let img = "https://cdn2.iconfinder.com/data/icons/harry-potter-solid-collection/60/20_-_Harry_Potter_-_Solid_-_Hedwig_Owl-64.png";
let header = new Header(img, "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году");
header.render("header");

let img2 = "https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Globe-64.png";
let header2 = new Header(img2, "Нет географических границ");
header2.render("header2");

let img3 = "https://cdn1.iconfinder.com/data/icons/social-17/48/like-64.png";
let header3 = new Header(img3, "Ассортимент");
header3.render("header3");

let img4 = "https://cdn4.iconfinder.com/data/icons/business-solid-the-capitalism/64/Insurance_security_approved-64.png";
let header4 = new Header(img4, "Безопасность");
header4.render("header4");

let img5 = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-person-64.png";
let header5 = new Header(img5, "Сохранение расходов на аренду и персонал");
header5.render("header5");

let img6 = "https://cdn2.iconfinder.com/data/icons/business-804/24/deal-contract-agreement-handshake-hand-64.png";
let header6 = new Header(img6, "Партнерские отношения");
header6.render("header6");

let img7 = "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_phone_iphone_48px-64.png";
let header7 = new Header(img7, "Покупатель всегда на связи");
header7.render("header7");

let img8 = "https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/sms-64.png";
let header8 = new Header(img8, "Комфортный выбор");
header8.render("header8");

let img9 = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-card-64.png";
let header9 = new Header(img9, "Удобство оплаты");
header9.render("header9");