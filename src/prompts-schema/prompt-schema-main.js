import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold(
      "Escolha a ferramenta (1 - QRCODE) | (2 - PASSWORD) | (3 - FORMATADOR DE PREÇO) | (4 - CUPOM)"
    ),
    pattern: /^[1-4]$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 4"),
    required: true,
  },
];

export default promptSchemaMain;