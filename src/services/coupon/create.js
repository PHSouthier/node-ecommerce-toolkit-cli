import prompt from "prompt";
import promptSchemaCoupon from "../../prompts-schema/prompt-schema-coupon.js";
import handle from "./handle.js";

async function createCoupon() {
  prompt.get(promptSchemaCoupon, handle);
  prompt.start();
}

export default createCoupon;