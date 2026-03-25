import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  const formatted = Number(result.value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(chalk.green("\nValor formatado:"));
  console.log(chalk.white.bold(formatted));
}

export default handle;