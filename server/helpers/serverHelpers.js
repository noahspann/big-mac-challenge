
let randomizer = (array) => {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

module.exports.randomizer = randomizer;