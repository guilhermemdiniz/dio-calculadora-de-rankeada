# Medalha de Rank 🏅

### Link para visualizar o projeto: 
https://dio-calculadora-de-rankeada.vercel.app/
##

Este projeto é uma aplicação simples que simula um sistema de ranks baseado no número de vitórias e derrotas de um jogador. O sistema atribui um rank (como Ferro, Bronze, Ouro, Diamante, Lendário, Imortal) com base no número de vitórias em relação às derrotas, e exibe uma medalha correspondente a cada rank.

## Funcionalidades

- **Sistema de Ranks**: O jogador ganha um rank dependendo da diferença entre vitórias e derrotas.
- **Botões de Interação**: O usuário pode clicar em "Win" (Vitória) ou "Lose" (Derrota) para atualizar o número de vitórias e derrotas.
- **Exibição de Rank**: A medalha correspondente ao rank atual do jogador é exibida, com ícones e uma borda de cor associada ao rank.
- **Animações**: A medalha apresenta animações sutis para dar um efeito visual agradável ao usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construir a interface de usuário.
- **React Icons**: Para adicionar ícones personalizados para representar cada rank.
- **CSS**: Para estilizar o layout e os efeitos visuais.
- **Hooks (useState, useEffect)**: Para gerenciar o estado e efeitos de interação no componente React.

## Como Rodar o Projeto

### Requisitos

- **Node.js**: A versão recomendada é a **14.x** ou superior.
- **npm**: Gerenciador de pacotes do Node.js (vem junto com o Node).

### Instalar Dependências

1. Clone o repositório:

```bash
git clone https://github.com/guilhermemdiniz/dio-calculadora-de-rankeada.git
```
2. Navegue até o repositório:

```bash
cd dio-calculadora-de-rankeada
```

### Rodar o Projeto

```bash
npm run dev
```
## Estrutura do Projeto

```bash
/src
  /components
    App.js           # Componente principal
  /styles
    index.css        # Estilos globais do projeto
  index.js           # Ponto de entrada da aplicação
/package.json         # Configurações e dependências do projeto
```
## Explicação do Código

1. App.js

- Contém a lógica para calcular o rank do usuário com base na diferença entre vitórias e derrotas.

- Usa o estado (useState) para controlar as vitórias, derrotas e o rank.
Também usa o useEffect para atualizar o rank automaticamente quando as vitórias ou derrotas mudam.

2. CSS:

- Define os estilos para as medalhas, com cores e bordas específicas para cada rank.

- Animações de transição são aplicadas para criar efeitos visuais na medalha.

## Como Funciona o Sistema de Ranks
A lógica de ranks é baseada na diferença entre vitórias e derrotas, como segue:

- Ferro: Vitórias < 10
- Bronze: Vitórias entre 11 e 20
- Prata: Vitórias entre 21 e 50
- Ouro: Vitórias entre 51 e 80
- Diamante: Vitórias entre 81 e 90
- Lendário: Vitórias entre 91 e 100
- Imortal: Vitórias >= 101

## Exemplo de Uso
1. Clique em Win para adicionar uma vitória.
2. Clique em Lose para adicionar uma derrota.
3. O rank será atualizado automaticamente conforme a diferença entre vitórias e derrotas.

A medalha correspondente ao rank será exibida com o ícone e as cores associadas ao seu nível atual.
