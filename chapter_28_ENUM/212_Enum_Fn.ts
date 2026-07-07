enum SeverityLevels {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical",
    BLOCKING = "blocking"
}

console.log(SeverityLevels.LOW);
console.log(SeverityLevels.MEDIUM);
console.log(SeverityLevels.HIGH);
console.log(SeverityLevels.CRITICAL);
console.log(SeverityLevels.BLOCKING);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);
console.log(Environment.Prod);