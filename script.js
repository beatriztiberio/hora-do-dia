function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.Hours()
    var hora = data.Hours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png.png'
        document.body.style.background = '#F9DEBC'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png.png'
        document.body.style.background = '#FC7301'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#294D88'
    }
}






// parei no minuto 13 da vídeo aula 2 de exercício