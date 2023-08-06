function sortAndPrintNames(names) {
    names.sort();
    return names.map((name, index) => `${index + 1}.${name}`).join('\n');
}
console.log(sortAndPrintNames(["John", "Bob", "Christina", "Ema"]))