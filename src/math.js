export function add(...summands) {
  return summands.reduce((prev, curr) => prev + curr)
}

export function multiply(...factors) {
  return factors.reduce((prev, curr) => prev * curr)
}
