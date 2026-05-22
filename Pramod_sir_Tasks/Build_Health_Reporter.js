
/*
Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.


100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment
*/


//Solution:

let Build_health = 71;

if (Build_health === 100) {
    console.log("🟢 Green Build");
}
else if (Build_health >= 90 && Build_health <= 99) {
    console.log("🟡 Stable (investigate failures)");
}
else if (Build_health >= 70 && Build_health <= 89) {
    console.log("🟠 Unstable");
}
else if (Build_health < 70) {
    console.log("🔴 Broken Build (block deployment)");
}


//Solution:

let Build_health_2 = 65;

if (Build_health_2 === 100) {
    console.log("🟢 Green Build");
}
else if (Build_health_2 >= 90 && Build_health_2 < 100) {
    console.log("🟡 Stable (investigate failures)");
}
else if (Build_health_2 >= 70 && Build_health_2 < 90) {
    console.log("🟠 Unstable");
}
else if (Build_health_2 < 70) {
    console.log("🔴 Broken Build (block deployment)");
}