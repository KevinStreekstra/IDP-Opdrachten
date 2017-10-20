document.getElementById("code").innerHTML = document.getElementById("showcode").innerHTML.split("<").join("&lt;");
document.getElementById("value").addEventListener("click",show);
document.getElementById("kleur").addEventListener("click",show);
document.getElementById("terug").addEventListener("click",show);

function show(ev)
{
    const show = document.getElementById("show");
    switch(ev.currentTarget.id)
    {
        case "value":
            show.setAttribute("cijfer",10);
            document.getElementById("code").innerHTML = document.getElementById("showcode").innerHTML.split("<").join("&lt;");
            break;
        case "kleur":
            document.getElementById("code").classList.add('color');
            document.getElementById("color").classList.add('color');
            break;
        case "terug":
            document.getElementById("code").classList.remove('color');
            document.getElementById("color").classList.remove('color');
            break;
        default:
            console.log("Nothing happened");
    }
}