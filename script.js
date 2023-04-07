function Calcular(){
    let ladoa = document.getElementById('lado-a')
    let a = Number(ladoa.value)
    let ladob = document.getElementById('lado-b')
    let b = Number(ladob.value)
    let res = document.getElementById('res')    
    let c = Number(Math.hypot(a, b).toFixed(2))

    if (a==0 || b==0 || c==0){
        res.innerHTML = `Não foi possível constituir um triângulo pois não há medida igual a 0cm.`
    } else {
        res.innerHTML = `O valor do lado C é ${c}.`
    }
}

function Limpar(){
    document.getElementById('form').reset()
    let res = document.getElementById('res')
    res.innerHTML = ''
}