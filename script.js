function Calcular(){
    let ladoa = document.getElementById('lado-a')
    let ladob = document.getElementById('lado-b')
    let res = document.getElementById('res')
    let a = ladoa.value
    let b = ladob.value
    let c = Math.hypot(a, b)

    if (a==0 || b==0){
        res.innerHTML = "Não foi possível calcular"
    } else {
        res.innerHTML = `O valor do lado C é ${c}.`
    }
}