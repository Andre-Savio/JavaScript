function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.setAttribute('src', 'imagens/manha.png')
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.setAttribute('src', 'imagens/tarde.png')
        document.body.style.background = '#c28535'
    } else {
        img.setAttribute('src', 'imagens/noite.png')
        document.body.style.background = '#515154'
    }
}









/* function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.scr= 'manha.jpg'
    } else if (hora > 12 && hora < 18) {
        img.scr= 'tarde.jpg'
    } else {
        img.scr= 'noite.jpg'
    }
    

}*/