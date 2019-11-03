const seasons = require('./seasons');
const directions = require('./directions')
const conditions = require('./conditions')
const colors = require('./colors')
const { EARS, BLOOD, KIDNEYS} = require('./body_parts')

const water = {
    name: 'water',
    season: seasons.WINTER,
    directions: directions.NORTH,
    condition: conditions.COLD,
    colors: [colors.BLACK, colors.BLUE],
    numbers: [1],
    body_parts: [EARS, BLOOD, KIDNEYS]
}

const the_controlling_cycle = {

}
const the_weakening_cycle = {

}

module.exports = Object.freeze({
    WATER: water
})