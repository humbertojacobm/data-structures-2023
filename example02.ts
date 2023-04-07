const findNemo = (array: string[]): void => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo!')
        }
    }
}

findNemo(['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']);

