import chalk from "chalk";

const promptSchemaPriceFormatter = [
  {
    name: "value",
    description: chalk.yellow("Digite o valor (ex: 1999.90)"),
    pattern: /^\d+(\.\d{1,2})?$/,
    message: chalk.red.italic("Digite um valor numérico válido (ex: 1999.90)"),
    required: true,
  },
];

export default promptSchemaPriceFormatter;