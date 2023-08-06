function addAndRemove(arr) {
    const newArr = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        const currCommand = arr[i];
      if (currCommand === 'add') {
        newArr.push(counter++)
      } else if (currCommand === 'remove') {
        newArr.pop(counter++);
      }
    }
    if (!newArr.length) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemove([
    'add',
    'add',
    'add',
    'add'])
addAndRemove([
    'add',
    'add',
    'remove',
    'add',
    'add'])