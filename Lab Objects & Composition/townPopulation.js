function townPopulation(townsAsStrings) {
    const result = {};
    for (let line of townsAsStrings) {
        const [name, population] = line.split(' <-> ');

        if (name in result) {
            result[name] += Number(population);
        } else {
            result[name] = Number(population);
        }
    }
    for (let name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])