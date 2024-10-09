/**
 * Rolls a given number of a given type of die
 * @count {number} the number of dice to roll
 * @type {number} the type of dice to roll (ie, number of sides per die)
 * @returnSum {boolean} return the sum of all rolls (returns an array of each roll value if false)
 *
 * @return  {number | number[]}  The sum of all dice rolled, or an array of each individual roll value
 */
const rollDice = (
  count: number,
  type: number,
  returnSum = true
): number | number[] => {
  const results = [];

  for (let i = 0; i < count; i++) {
    results.push(Math.ceil(Math.random() * type));
  }

  if (returnSum) {
    return results.reduce((acc, curr) => acc + curr);
  }

  return results;
};

export default rollDice;
