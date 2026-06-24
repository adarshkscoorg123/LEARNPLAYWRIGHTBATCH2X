
import { BASE_URL as bul_util, formatUpperCaseString } from "../testutils.js";
import { BASE_URL as bul_testtul, formatTestName } from "../utils.js";


console.log(bul_util); //https://app.vwo.com
console.log(bul_testtul); //https://api.staging.com
let result_1 = formatUpperCaseString("Login");
console.log(result_1);  // LOGIN
let result_2 = formatTestName("LoGout");
console.log(result_2); // TC_logout
