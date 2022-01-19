const validade = (data,exp) => {
    hoje = new Date()
    novaData = new Date(data)
    diferenca = hoje - novaData
    exp.trim("d")
    var numero = parseInt(exp)
    var valor = diferenca / (1000 * 60 * 60 * 24) // milisegundos * segundo * minutos * horas = dia
    if (valor > numero) return false
    return true
}
console.log(validade("2021-11-17T20:40:09.503Z", "10d"))
console.log(validade("2021-12-10T00:00:00.000Z", "180d"))