// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    const lowerCaseLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetters));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase());
}