# 📊 Calculadora Aritmética e Tabuada - JavaScript

Projeto desenvolvido com foco em operações aritméticas básicas e geração de tabuada. Solução simples, escalável e de rápida implementação para fins educacionais, testes de lógica e validação de funções matemáticas.

---

## 🚀 Funcionalidades

- ✅ **Soma** de dois números
- ✅ **Subtração** de dois números
- ✅ **Multiplicação** de dois números
- ✅ **Divisão** de dois números
- ✅ **Validação de número par**
- ✅ **Geração de tabuada de 1 a 10 para qualquer número**

---

## 🛠️ Tecnologias

- JavaScript (Vanilla JS)
- Ambiente: Console do navegador ou Node.js

---

## 📦 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

node index.js
````

## 🔗 Dependências

- Nenhuma. Código 100% puro em JavaScript.

---

## 🧠 Documentação das Funções

| Função                | Descrição                                       | Parâmetros                          | Retorno             |
|-----------------------|-------------------------------------------------|-----------------------------------|---------------------|
| `tabuada(n)`          | Gera e exibe a tabuada do número informado     | `n`: número inteiro               | `void` (console)    |
| `somar(a, b)`         | Exibe no console a soma dos dois números       | `a`: número <br> `b`: número      | `void` (console)    |
| `ehPar(n)`            | Verifica se o número é par                      | `n`: número inteiro               | `boolean` (console) |
| `soma(a, b)`          | Retorna a soma                                  | `a`: número <br> `b`: número      | `number`            |
| `subtracao(a, b)`     | Retorna a subtração                             | `a`: número <br> `b`: número      | `number`            |
| `multiplicacao(a, b)` | Retorna a multiplicação                         | `a`: número <br> `b`: número      | `number`            |
| `divisao(a, b)`       | Retorna a divisão                               | `a`: número <br> `b`: número      | `number`            |

---

## 🏗️ Estrutura de Código

- **Operações Aritméticas:** Soma, Subtração, Multiplicação e Divisão.
- **Validação:** Verificação de número par.
- **Funcionalidade Extra:** Impressão de tabuada no console.
- **Input do Usuário:** Captura de dois números via `prompt()` para soma.

---

## ⚠️ Observações

- O script faz uso do `prompt()`, que funciona apenas em ambientes de navegador.
- Para execução no Node.js, substitua `prompt()` por `readline` ou outra biblioteca de entrada síncrona.

---
