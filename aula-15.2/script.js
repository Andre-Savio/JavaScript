function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Valor invalido')
    } else {
        var n1 = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1*c}`
            item.value = 'tab${c}'
            tab.appendChild(item)
            c++
        } 
    }

}