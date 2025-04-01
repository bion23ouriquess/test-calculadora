const Calculadora = require("./classes/Calculadora")

test("Deve somar dois números com sucesso", () => {
    //GIVEN - DADO
    calc = new Calculadora()

    //WHEN - QUANDO
    resultado = calc.somar(2, 3)

    //THEN - ENTAO
    expect(resultado).toBe(5)
})

test("Deve subtrair dois números com sucesso", () =>{
    calc = new Calculadora()
    resultado = calc.subtrair(4, 1)
    expect(resultado).toBe(3)
})
test("Deve multiplicar dois números com sucesso", () =>{
    calc = new Calculadora()
    resultado = calc.multiplicar(4, 5)
    expect(resultado).toBe(20)
})
test("Deve dividir dois números com sucesso", () =>{
    calc = new Calculadora()
    resultado = calc.dividir(10, 2)
    expect(resultado).toBe(5)
})