const args = process.argv.slice(2);

const calculateBottles = (investment) => {
  if(investment <= 0) {
    return 0;
  }
  return Math.abs((2 * investment) - 5);
};

console.log(calculateBottles(args[0]));


module.exports = {
  calculateBottles
}