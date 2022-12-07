let but = document.querySelector("#but");
but.addEventListener("click", smsUser);

function smsUser() {
    let name = document.getElementsByName("your_name")[0].value;
    let sms = document.getElementsByName("your_message")[0].value;
    let regExpBBBold = /<(b|u|i|s|h1|p)>(.*)<(\/)\1>/ig;
    sms = sms.replace(regExpBBBold, "<span style='color:red'>&lt;$1&gt;</span> $2 <span style='color:red'>&lt;$3$1&gt;</span><br>");
    document.write(`
    <fieldset>
        <legend>${name}</legend>
        <div>${sms}</div>
    </fieldset>
`);
}


