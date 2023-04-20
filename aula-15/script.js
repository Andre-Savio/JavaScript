function verificar() {
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    if (fano.value.length == 0 || fano.value > ano ){
        alert('ERROR')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/bb-m.jpg')
            }else if (idade >= 10 && idade < 18){
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else {
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        }else  if (fsex[1].checked){ 
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            }else if (idade >= 10 && idade < 18){
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            }else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            }else {
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi identificado um(a) ${gênero}, de ${idade} anos`
        res.appendChild(img)

    }
}