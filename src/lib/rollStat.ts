import rollDice from './rollDice'

/**
 * Generate a single stat value for a character
 * @diceRolled number of dice rolled (default 2)
 * @rollsTaken number of rolls taken from the pool of dice rolled (default 2)
 * @takeHighest takes the highest rolls if true, lowest rolls if false (default true)
 */
const rollStat = (diceRolled = 2, rollsTaken = 2, takeHighest = true) => {
    const results = rollDice(diceRolled, 10, false) as number[]

    if (takeHighest) {
        results.sort((a, b) => b - a)
    } else {
        results.sort((a, b) => a - b)
    }

    return results.slice(0, rollsTaken).reduce((acc, curr) => acc + curr) + 25
}

export default rollStat
