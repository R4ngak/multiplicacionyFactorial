

const num = parseInt(prompt("ingrese numero de 1 a 20 para obtener tabla de multiplicacion y factorial"));
if(num <=20 && num> 0) {
console.log("Las Tablas!")
const verificaNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
verificaNum(num)

console.log("Ahora el Factorial!")
for( let i =1; i<=num; i++){
let factorial = (num) => {
    if(num <=1) return 1
    return num * factorial(num-1)
}   
console.log(`El factorial de ${i} es :${factorial(i)}`)
}

} else alert("numero fuera de rango")