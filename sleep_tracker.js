// A simple function that checks how many hours of sleep a night you're getting

var sleepCheck = function(numHours) {
    if (numHours >= 8) {
    return "You're getting plenty of sleep! Maybe even too much!";
}
    else {
    return "Get some more shut eye!"
}
};

// Try it out. Replace the number in () with the total number of hours of sleep that you got last night.
console.log(sleepCheck(10))
