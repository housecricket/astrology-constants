const elements = require('./elements');
const yinyang = require('./yinyang');
const seasons = require('./seasons');
const directions = require('./directions');

const Rat = {
    id: 0,
    name: 'Rat',
    lName: 'Tý',
    cName: '鼠',
    vName: 'Chuột',
    polarity: yinyang.yang,
    element: elements.water,
    season: seasons.winter,
    direction: directions.north,
    hours: [23, 1],
    month: 2,
}
module.exports = Object.freeze({
    Rat: Rat
})


