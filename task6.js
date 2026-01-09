export function rubricExcellent() {
    if (score >= 9) {
        return "Excellent";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
  }
}