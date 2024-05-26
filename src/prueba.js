function funcion1(var1){
    return function funcion2(var2){
        return var1 + var2
    }
}

const resultado1 = funcion1(1)
console.log("resultado1",resultado1)
const resultado2 = resultado1(2)
console.log("resultado2",resultado2)