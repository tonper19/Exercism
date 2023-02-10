// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const HOURS_PER_DAY = 8;
const MONTH_BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * HOURS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const DAYS_IN_BUDGET = Math.floor(budget / dayRate(ratePerHour));
  return DAYS_IN_BUDGET;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const NUMBER_OF_MONTHS = Math.floor(numDays / MONTH_BILLABLE_DAYS);
  const NUMBER_OF_DAYS = numDays % MONTH_BILLABLE_DAYS;
  const DISCOUNT_RATE_PER_HOUR = ratePerHour - (ratePerHour * discount);
  const MONTH_PRICE = dayRate(DISCOUNT_RATE_PER_HOUR) * NUMBER_OF_MONTHS * MONTH_BILLABLE_DAYS;
  const DAY_PRICE = dayRate(ratePerHour) * NUMBER_OF_DAYS;
  return Math.ceil(MONTH_PRICE + DAY_PRICE);
}
