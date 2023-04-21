var n1 = document.getElementById('txtn1') 
var lista = document.getElementById('seln')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
    if(Number(n) > 1 && Number(n) <= 100){
    return true
    } else {
    return false
    }    
}
function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false 
    }

}
function adicionar(){
    if (isNumero(n1.value) && !inList(n1.value, valores)){
        valores.push(Number(n1.value))
        var item = document.createElement('option')
        item.text = `Valor ${n1.value} adiacionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor invalido ou já encontrado na lista')
    }
    n1.value = ''
    n1.focus()
}
function finalizar(){
    if ( valores.length == 0){
        alert('adicione valores')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0 
        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>` 
        res.innerHTML += `<p>O maior valor informado foi ${menor}</p>` 
        res.innerHTML += `<p> Somando toso os valores, temos ${soma}</p>`
        res.innerHTML += `<p> A media dos valores é ${media}</p>`
    }
   
   
}



/*
 
num.push(nadd)
if (nadd > 0 && nadd <= 100 ) {
    var item = document.createElement('option')
    item.text = `Valor ${nadd} adicionado`
    nsel.appendChild(item)
} else {
    alert(`${num[3]}`)
} */