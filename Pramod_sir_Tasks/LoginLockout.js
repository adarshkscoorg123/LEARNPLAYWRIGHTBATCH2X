
/* Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts. */

let Login_Attempts = 0;

if (Login_Attempts === 0) {
    console.log("Login successful");
}
else if (Login_Attempts === 2) {
    console.log("1 attempt left before lockout");
}
else if (Login_Attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
}

else {
    console.log("invalid attempt");
}