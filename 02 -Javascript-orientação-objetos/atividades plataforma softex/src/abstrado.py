import math

class NumeroComplexo:
    def __init__(self, real, imaginario):
        self.real = real
        self.imaginario = imaginario

    def calcular_modulo(self):
        return math.sqrt(self.real ** 2 + self.imaginario ** 2)

    def calcular_conjugado(self):
        return NumeroComplexo(self.real, -self.imaginario)

    def somar(self, outro):
        return NumeroComplexo(self.real + outro.real, self.imaginario + outro.imaginario)

    def subtrair(self, outro):
        return NumeroComplexo(self.real - outro.real, self.imaginario - outro.imaginario)

    def multiplicar(self, outro):
        real_part = self.real * outro.real - self.imaginario * outro.imaginario
        imag_part = self.real * outro.imaginario + self.imaginario * outro.real
        return NumeroComplexo(real_part, imag_part)

    def dividir(self, outro):
        conjugate = outro.calcular_conjugado()
        denominator = outro.multiplicar(conjugate).real
        if denominator == 0:
            raise ZeroDivisionError("Divisão por zero não é permitida.")
        result = self.multiplicar(conjugate)
        return NumeroComplexo(result.real / denominator, result.imaginario / denominator)

    def imprimir_propriedades(self):
        print(f"Parte Real: {self.real}")
        print(f"Parte Imaginária: {self.imaginario}")


num1 = NumeroComplexo(3, 4)
num2 = NumeroComplexo(1, 2)


soma = num1.somar(num2)
subtracao = num1.subtrair(num2)
multiplicacao = num1.multiplicar(num2)
divisao = num1.dividir(num2)


num1.imprimir_propriedades()
num2.imprimir_propriedades()


print("Soma:")
soma.imprimir_propriedades()

print("Subtração:")
subtracao.imprimir_propriedades()

print("Multiplicação:")
multiplicacao.imprimir_propriedades()

print("Divisão:")
divisao.imprimir_propriedades()