import chalk from "chalk";

const promptSchemaCoupon = [
  {
    name: "prefix",
    description: chalk.yellow("Digite o prefixo do cupom (ex: VERAO, NATAL)"),
    pattern: /^[A-Za-z0-9]+$/,
    message: chalk.red.italic("Use apenas letras e números, sem espaços"),
    required: true,
  },
  {
    name: "discountType",
    description: chalk.yellow("Tipo de desconto (1 - Porcentagem) ou (2 - Valor fixo)"),
    pattern: /^[1-2]$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
  {
    name: "discountValue",
    description: chalk.yellow("Valor do desconto (ex: 10 para 10% ou R$10)"),
    pattern: /^\d+(\.\d{1,2})?$/,
    message: chalk.red.italic("Digite um valor numérico válido"),
    required: true,
  },
];

export default promptSchemaCoupon;