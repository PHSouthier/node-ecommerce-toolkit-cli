import prompt from "prompt";
import promptSchemaPriceFormatter from "../../prompts-schema/prompt-schema-price-formatter.js";
import handle from "./handle.js";

async function createPriceFormatter() {
  prompt.get(promptSchemaPriceFormatter, handle);
  prompt.start();
}

export default createPriceFormatter;