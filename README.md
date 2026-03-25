# Kit de Ferramentas para E-commerce

Utilitários para e-commerces via linha de comando.

## Ferramentas disponíveis

| Opção | Ferramenta            | Descrição                              |
|-------|-----------------------|----------------------------------------|
| 1     | QR Code               | Gera QR Code a partir de um link       |
| 2     | Gerador de senha      | Gera senha aleatória configurável      |
| 3     | Formatador de preço   | Formata valores monetários em BRL      |
| 4     | Gerador de cupom      | Gera cupons de desconto personalizados |

## Requisitos

- Node.js 18+

## Instalação

```bash
git clone https://github.com/PHSouthier/node-ecommerce-toolkit-cli.git
cd node-ecommerce-toolkit-cli
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis para o gerador de senha:

```env
PASSWORD_LENGTH=12
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
```

## Uso

```bash
npm start
```

Escolha a ferramenta desejada e siga as instruções no terminal.

## Exemplos

### QR Code
```
Digite o link para gerar o QR CODE: https://meusite.com.br
Escolha entre o tipo de QRcode (1 - NORMAL) ou (2 - TERMINAL): 2
```

### Formatador de preço
```
Digite o valor (ex: 1999.90): 1999.90
→ R$ 1.999,90
```

### Gerador de cupom
```
Digite o prefixo do cupom (ex: VERAO, NATAL): VERAO
Tipo de desconto (1 - Porcentagem) ou (2 - Valor fixo): 1
Valor do desconto (ex: 10 para 10% ou R$10): 10
→ VERAO-10OFF-XK3P
```

## Dependências

- [chalk](https://github.com/chalk/chalk) — estilização do terminal
- [prompt](https://github.com/flatiron/prompt) — interação via prompt
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) — geração de QR Code no terminal
