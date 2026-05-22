
let bug_impact_classifier = 7;

if (bug_impact_classifier === 9 || bug_impact_classifier === 10) {
    console.log("Severity: Critical — Block release");
}

else if (bug_impact_classifier === 7 || bug_impact_classifier === 8) {
    console.log("High");
}

else if (bug_impact_classifier >= 4 && bug_impact_classifier <= 6) {
    console.log("Medium");
}

else if (bug_impact_classifier >= 1 && bug_impact_classifier <= 3) {
    console.log("Low");
}