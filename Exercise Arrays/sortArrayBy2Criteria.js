function orderStrings(strings) {
    strings.sort((a, b) => {
        if (a.length === b.length) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        } else {
            return a.length - b.length;
        }
    });

    return strings.join('\n');
}
console.log(orderStrings([
    'alpha',
    'beta',
    'gamma']));
console.log(orderStrings([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']));
console.log(orderStrings([
    'test',
    'Deny',
    'omen',
    'Default']));