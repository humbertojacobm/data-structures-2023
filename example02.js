var findNemo = function (array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var fish = array_1[_i];
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    }
};
findNemo(['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']);
