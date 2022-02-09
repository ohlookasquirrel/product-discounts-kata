const singleProductCost = 299
const twoProductCost = 598 // 299 * 2
const setOfThreeCost = 807.3 // 299 * 3 * 0.9
const setOfFourCost = 956.8 // 299 * 4 * 0.8
const setOfFiveCost = 1121.25 // 299 * 5 * 0.75


module.exports.calculateProductTotal = (products) => {
    const emptyProductCounts = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    }
    const productCounts = products.reduce((accumulator, currentProduct) => {
        return {
            ...accumulator,
            [currentProduct]: ++accumulator[currentProduct]
        }
    }, emptyProductCounts)
    const values = Object.values(productCounts).sort()

    const total = values[0] * setOfFiveCost
        + Math.max(values[1] - values[0], 0) * setOfFourCost
        + Math.max(values[2] - values[1], 0) * setOfThreeCost
        + Math.max(values[3] - values[2], 0) * twoProductCost
        + Math.max(values[4] - values[3], 0) * singleProductCost

    return Math.round((total + Number.EPSILON) * 100) / 100
}