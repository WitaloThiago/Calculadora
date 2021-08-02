// Essa função coloca os números no resultado
function insert(num) {

    var resultado = document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML = resultado + num

}
// Essa função diminui um número a cada click
function back() {

    var resultado = document.getElementById('resultado').innerHTML

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)


}
// Essa função vai calcular os números que o usuário dejesa
function calcular() {

    var resultado = document.getElementById('resultado').innerHTML

    var resultado = document.getElementById('resultado').innerHTML = eval(resultado)

    // Condicional falando se o resultado for indefinido vai retornar 0 ou se não for vai retornar o resultado do cálculo 
    if (resultado == undefined) {

        document.getElementById("resultado").innerHTML = "0"

    }
    else {
        var resultado = document.getElementById('resultado').innerHTML = eval(resultado)

    }



}