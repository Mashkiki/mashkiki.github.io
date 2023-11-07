function clock() {
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()

    var format

    if (min < 10) {
        format = hour + ":0" + min
    } else {format = hour + ":" + min}

    document.getElementById("clock").innerHTML = format
} clock(); window.setInterval(()=>{clock()}, 850)

document.getElementById("hello").style.opacity = 0
function changeOpacity() {
    const opa = document.getElementById("hello")
    if (opa.style.opacity == 0) {
        opa.style.opacity = 1
        setTimeout(()=>{opa.style.opacity = 0.5},1505)
        setTimeout(()=>{opa.style.opacity = 1},3010)
    } else {opa.style.opacity = 0}
}

var welcomeTexts = ["welcome, friend", "welkom, vriend", "mirësevini, mik", "أهلاً بك، صديقي", "добро запрашаем, сябар", "dobrodošli, prijatelju", "欢迎，朋友", "vítej, příteli", "tervetuloa, ystävä", "bienvenue, ami", "Willkommen, Freund", "Aloha, hoaloha", "स्वागत, दोस्त", "ברוך הבא, חבר", "Üdvözöllek, barátom", "Fáilte, a chara", "Benvenuto, amico", "ようこそ、友よ", "Қош келдіңіз, достарым", "환영합니다, 친구", "salve, amice", "sveicināti, draugs", "witaj, przyjacielu", "ласкаво просимо, друже", "добро пожаловать, друг", "bienvenido, amigo", "välkommen, vän"]
var cycle = 0
function changeTexts() {
    var text = document.getElementById("hello")

    text.innerHTML = welcomeTexts[cycle]
    cycle++
    if (cycle == 27){cycle = 0}
}

function cycleTexts() {
    changeOpacity()
    setTimeout(() => {
        changeTexts()
        changeOpacity()
    }, 1500);
} setTimeout(()=>{changeOpacity()},1505); setInterval(()=>{cycleTexts()},6020)