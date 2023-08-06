function cooking(...params) {
    let number = Number(params[0]);
    for (const command of params) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number++;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number = number - number * 0.2;
                console.log(number);
                break;
        }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')