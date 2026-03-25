import chalk from "chalk";

function randomSuffix(length = 4) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

async function handle(err, result) {
  if (err) {
    console.log("error on application");
    return;
  }

  const prefix = result.prefix.toUpperCase();
  const isPercentage = result.discountType == 1;
  const discountLabel = isPercentage
    ? `${result.discountValue}OFF`
    : `R${result.discountValue}OFF`;
  const suffix = randomSuffix();

  const coupon = `${prefix}-${discountLabel}-${suffix}`;

  console.log(chalk.green("\nCupom gerado:"));
  console.log(chalk.white.bold(coupon));
}

export default handle;